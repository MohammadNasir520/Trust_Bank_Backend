import { BankBalance } from '@prisma/client';

import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { bankId } from '../bankProfile/bankProfile.constants';

const insertIntoDB = async (data: BankBalance): Promise<BankBalance> => {
  data.bankProfileId = bankId;
  const bankBalance = await prisma.bankBalance.findFirst({
    where: {
      currency: data.currency,
    },
  });

  if (bankBalance) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'this currency already exist');
  }
  const result = await prisma.bankBalance.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<BankBalance>[]> => {
  const result = await prisma.bankBalance.findMany({});
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<BankBalance | null>> => {
  const result = await prisma.bankBalance.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deposit = async (
  id: string,
  payload: Partial<BankBalance>
): Promise<Partial<BankBalance>> => {
  const existingBalace = await prisma.bankBalance.findFirst({
    where: {
      id: id,
    },
  });

  let newBalance = 0;
  if (existingBalace && payload.balance) {
    // eslint-disable-next-line no-unused-vars
    newBalance = existingBalace?.balance + payload.balance;
  }

  const result = await prisma.bankBalance.update({
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
  payload: Partial<BankBalance>
): Promise<Partial<BankBalance>> => {
  const existingBalace = await prisma.bankBalance.findFirst({
    where: {
      id: id,
    },
  });

  let newBalance = 0;
  if (existingBalace && payload.balance) {
    // eslint-disable-next-line no-unused-vars
    newBalance = existingBalace?.balance - payload.balance;
  }

  const result = await prisma.bankBalance.update({
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
  const result = await prisma.bankBalance.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const BankBalanceService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  deposit,
  withdraw,
  deleteFromDB,
};
