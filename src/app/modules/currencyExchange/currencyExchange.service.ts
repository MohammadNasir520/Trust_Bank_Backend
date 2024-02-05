import { CurrencyExchange } from '@prisma/client';

import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: CurrencyExchange,
  authUser: JwtPayload
): Promise<CurrencyExchange> => {
  const findUser = await prisma.accounts.findFirst({
    where: {
      userId: authUser.userId,
    },
  });
  return console.log(findUser);

  const CurrencyExchange = await prisma.currencyExchange.findFirst({
    where: {
      currency: data.currency,
    },
  });

  if (CurrencyExchange) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'this currency already exist');
  }
  const result = await prisma.currencyExchange.create({
    data,
  });
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

const deposit = async (
  id: string,
  payload: Partial<CurrencyExchange>
): Promise<Partial<CurrencyExchange>> => {
  const existingBalace = await prisma.currencyExchange.findFirst({
    where: {
      id: id,
    },
  });

  let newBalance = 0;
  if (existingBalace && payload.balance) {
    // eslint-disable-next-line no-unused-vars
    newBalance = existingBalace?.balance + payload.balance;
  }

  const result = await prisma.currencyExchange.update({
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
  payload: Partial<CurrencyExchange>
): Promise<Partial<CurrencyExchange>> => {
  const existingBalace = await prisma.currencyExchange.findFirst({
    where: {
      id: id,
    },
  });

  let newBalance = 0;
  if (existingBalace && payload.balance) {
    // eslint-disable-next-line no-unused-vars
    newBalance = existingBalace?.balance - payload.balance;
  }

  const result = await prisma.currencyExchange.update({
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
  deposit,
  withdraw,
  deleteFromDB,
};
