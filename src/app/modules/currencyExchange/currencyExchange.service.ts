import { CurrencyExchange } from '@prisma/client';

import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: CurrencyExchange, authUser: JwtPayload) => {
  const findUser = await prisma.accounts.findFirst({
    where: {
      userId: authUser.userId,
    },
  });
  const accountId = findUser?.id;

  const findBalance = await prisma.userBalance.findFirst({
    where: {
      accountId: accountId,
      currency: data.toCurrency,
    },
  });

  let result;
  if (!findBalance?.id) {
    result = await prisma.userBalance.create({
      data: {
        id: authUser.userId,
        balance: data.toAmount,
        currency: data.toCurrency,
        userAccounts: {
          connect: { id: accountId },
        },
      },
    });
  } else if (findBalance?.id) {
    const newBalance = findBalance.balance + data.toAmount;
    result = await prisma.userBalance.update({
      where: {
        id: findBalance.id,
        accountId: accountId,
        currency: data.toCurrency,
      },
      data: {
        balance: newBalance,
      },
    });
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
