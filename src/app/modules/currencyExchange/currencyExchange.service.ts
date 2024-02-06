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

  const findUserBalance = await prisma.userBalance.findFirst({
    where: {
      accountId: accountId,
      currency: data.toCurrency,
    },
  });

  let result;
  if (!findUserBalance?.id) {
    result = await prisma.userBalance.create({
      data: {
        balance: data.toAmount,
        currency: data.toCurrency,
        userAccounts: {
          connect: { id: accountId },
        },
      },
    });
  } else if (findUserBalance?.id) {
    const newBalance = findUserBalance.balance + data.toAmount;
    result = await prisma.userBalance.update({
      where: {
        id: findUserBalance.id,
        accountId: accountId,
        currency: data.toCurrency,
      },
      data: {
        balance: newBalance,
      },
    });

    // eslint-disable-next-line no-unused-vars
    const newBankBalance = findUserBalance.balance - data.fromAmount;
    console.log('newbankbalance', newBankBalance);
    // eslint-disable-next-line no-unused-vars
    const bankBalanceResult = await prisma.bankBalance.findFirst({
      where: {
        currency: data.fromCurrency,
      },
    });

    console.log('findbankbalance', bankBalanceResult);
    if (bankBalanceResult) {
      const newBalance = bankBalanceResult.balance - data.fromAmount;
      // console.log(bankBalanceResult.balance - data.fromAmount);
      // eslint-disable-next-line no-unused-vars
      const updateBankBalanceResult = await prisma.bankBalance.update({
        where: {
          id: bankBalanceResult.id,
          currency: data.fromCurrency,
        },
        data: {
          balance: newBalance,
        },
      });
    }
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
