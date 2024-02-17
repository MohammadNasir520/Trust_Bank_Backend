import { CurrencyExchange } from '@prisma/client';

import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: CurrencyExchange, authUser: JwtPayload) => {
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
  const findUserFromBalance = await prisma.userBalance.findFirst({
    where: {
      accountId: accountId,
      currency: data.toCurrency,
    },
  });

  const findUserToBalance = await prisma.userBalance.findFirst({
    where: {
      accountId: accountId,
      currency: data.toCurrency,
    },
  });

  let result;
  data.userId = accountId
  if (!findUserToBalance?.id && findUserFromBalance) {
    result = await prisma.userBalance.create({
      data: {
        balance: data.toAmount,
        currency: data.toCurrency,
        accountId
      },
    });

    if (findUserFromBalance) {
      await prisma.userBalance.updateMany({
        where: {
          currency: data.fromCurrency,
        },
        data: {
          balance: {
            decrement: data.fromAmount
          },
        },
      })
    }
  }


  else if (findUserToBalance?.id) {
    const newBalance = findUserToBalance.balance + data.toAmount;
    result = await prisma.userBalance.update({
      where: {
        id: findUserToBalance.id,
        accountId: accountId,
        currency: data.toCurrency,
      },
      data: {
        balance: newBalance,
      },
    });


    await prisma.userBalance.updateMany({
      where: {
        currency: data.fromCurrency,
      },
      data: {
        balance: {
          decrement: data.fromAmount
        },
      },
    })
  }
  return result;
};

const getAllFromDB = async (): Promise<Partial<CurrencyExchange>[]> => {
  const result = await prisma.currencyExchange.findMany({});
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<CurrencyExchange | null>> => {
  const result = await prisma.currencyExchange.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.currencyExchange.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const CurrencyExchangeService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,

  deleteFromDB,
};
