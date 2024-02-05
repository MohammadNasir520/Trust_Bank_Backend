import { UserBalance } from '@prisma/client';

import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: UserBalance,
  authUser: JwtPayload
): Promise<UserBalance | undefined> => {
  const bankAccount = await prisma.accounts.findFirst({
    where: {
      userId: authUser.userId,
    },
  });

  const accountId = bankAccount?.id;

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
  if (!findExistBalance) {
    result = await prisma.userBalance.create({
      data,
      include: {
        userAccounts: true,
      },
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
    });
  }

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

const deposit = async (
  id: string,
  payload: Partial<UserBalance>
): Promise<Partial<UserBalance>> => {
  const existingBalace = await prisma.userBalance.findFirst({
    where: {
      id: id,
    },
  });

  let newBalance = 0;
  if (existingBalace && payload.balance) {
    // eslint-disable-next-line no-unused-vars
    newBalance = existingBalace?.balance + payload.balance;
  }

  const result = await prisma.userBalance.update({
    where: {
      id: id,
    },
    data: {
      balance: newBalance,
    },
  });
  return result;
};
const withdraw = async (
  id: string,
  payload: Partial<UserBalance>
): Promise<Partial<UserBalance>> => {
  const existingBalace = await prisma.userBalance.findFirst({
    where: {
      id: id,
    },
  });

  let newBalance = 0;
  if (existingBalace && payload.balance) {
    // eslint-disable-next-line no-unused-vars
    newBalance = existingBalace?.balance - payload.balance;
  }

  const result = await prisma.userBalance.update({
    where: {
      id: id,
    },
    data: {
      balance: newBalance,
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
  deposit,
  withdraw,
  deleteFromDB,
};
