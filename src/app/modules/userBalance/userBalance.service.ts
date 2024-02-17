import { UserBalance } from '@prisma/client';

import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: UserBalance, authUser: JwtPayload) => {
  const bankAccount = await prisma.user.findFirst({
    where: {
      id: authUser.userId,
    },
    include: {
      savingAccount: {
        include: {
          savingAccountBalances: true,
        },
      },
      studentAccount: {
        include: {
          StudentAccountBalance: true,
        },
      },
      merchentAccount: {
        include: {
          merchentAccountBalance: true,
        },
      },
      currentAccount: {
        include: {
          CurrentAccountBalance: true,
        },
      },
    },
  });

  let account: any;
  let accountBalances: any;
  if (bankAccount?.merchentAccount) {
    // eslint-disable-next-line no-unused-vars
    account = bankAccount.merchentAccount;
    accountBalances = bankAccount.merchentAccount.merchentAccountBalance;
  }
  if (bankAccount?.studentAccount) {
    account = bankAccount.studentAccount;
    // eslint-disable-next-line no-unused-vars
    accountBalances = bankAccount.studentAccount.StudentAccountBalance;
  }
  if (bankAccount?.currentAccount) {
    account = bankAccount.currentAccount;
    // eslint-disable-next-line no-unused-vars
    accountBalances = bankAccount.currentAccount.CurrentAccountBalance;
  }
  if (bankAccount?.savingAccount) {
    account = bankAccount.savingAccount;
    // eslint-disable-next-line no-unused-vars
    accountBalances = bankAccount.savingAccount.savingAccountBalances;
  }




  const accountId = account?.id;

  if (!accountId) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'you have no account, please create account first'
    );
  }

  // return console.log(data, bankAccount?.id);

  const findExistBalance = await prisma.userBalance.findFirst({
    where: {
      accountId: accountId,
      currency: data.currency,
    },
  });

  let result;
  data.accountId = accountId

  if (!findExistBalance) {
    result = await prisma.userBalance.create({
      data,
      // include: {
      //   userAccounts: true,
      // },
    });
  } else if (findExistBalance) {
    const newBalance = data.balance + findExistBalance.balance;
    result = await prisma.userBalance.update({
      where: {
        id: findExistBalance.id,
        accountId: accountId,
        currency: data.currency,
      },
      data: {
        balance: newBalance,
      },
      // include: {
      //   userAccounts: true,
      // },
    });
  }
  await prisma.userTransaction.create({
    data: {
      type: 'deposit',
      amount: data.balance,
      userId: authUser.userId,
      currency: data.currency,
    },
  });

  await prisma.bankBalance.updateMany({
    where: {
      currency: data.currency
    },
    data: {
      balance: {
        increment: data.balance
      }
    }
  });

  return result;
};
const userWithdraw = async (
  data: UserBalance,
  authUser: JwtPayload
): Promise<UserBalance | undefined> => {
  const bankAccount = await prisma.user.findFirst({
    where: {
      id: authUser.userId,
    },
    include: {
      savingAccount: {
        include: {
          savingAccountBalances: true,
        },
      },
      studentAccount: {
        include: {
          StudentAccountBalance: true,
        },
      },
      merchentAccount: {
        include: {
          merchentAccountBalance: true,
        },
      },
      currentAccount: {
        include: {
          CurrentAccountBalance: true,
        },
      },
    },
  });

  let account: any;
  let accountBalances: any;
  if (bankAccount?.merchentAccount) {
    // eslint-disable-next-line no-unused-vars
    account = bankAccount.merchentAccount;
    accountBalances = bankAccount.merchentAccount.merchentAccountBalance;
  }
  if (bankAccount?.studentAccount) {
    account = bankAccount.studentAccount;
    // eslint-disable-next-line no-unused-vars
    accountBalances = bankAccount.studentAccount.StudentAccountBalance;
  }
  if (bankAccount?.currentAccount) {
    account = bankAccount.currentAccount;
    // eslint-disable-next-line no-unused-vars
    accountBalances = bankAccount.currentAccount.CurrentAccountBalance;
  }
  if (bankAccount?.savingAccount) {
    account = bankAccount.savingAccount;
    // eslint-disable-next-line no-unused-vars
    accountBalances = bankAccount.savingAccount.savingAccountBalances;
  }




  const accountId = account?.id;

  if (!accountId) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'you have no account, please create account first'
    );
  }

  // return console.log(data, bankAccount?.id);

  const findExistBalance = await prisma.userBalance.findFirst({
    where: {
      accountId: accountId,
      currency: data.currency,
    },
  });

  let result;
  data.accountId = accountId

  if (!findExistBalance) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Please deposit to your account'
    );
  } else if (findExistBalance) {
    if (findExistBalance?.balance < data.balance) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        'You have insufficient balance!'
      );
    }
    const newBalance = findExistBalance.balance - data.balance;
    result = await prisma.userBalance.update({
      where: {
        id: findExistBalance.id,
        accountId: accountId,
        currency: data.currency,
      },
      data: {
        balance: newBalance,
      },
      // include: {
      //   userAccounts: true,
      // },
    });
  }
  await prisma.userTransaction.create({
    data: {
      type: 'deposit',
      amount: data.balance,
      userId: authUser.userId,
      currency: data.currency,
    },
  });
  await prisma.bankBalance.updateMany({
    where: {
      currency: data.currency
    },
    data: {
      balance: {
        decrement: data.balance
      }
    }
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<UserBalance>[]> => {
  const result = await prisma.userBalance.findMany({});
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<UserBalance | null>> => {
  const result = await prisma.userBalance.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.userBalance.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const UserBalanceService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,

  userWithdraw,
  deleteFromDB,
};
