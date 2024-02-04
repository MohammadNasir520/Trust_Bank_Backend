import { BankProfile } from '@prisma/client';

import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: BankProfile): Promise<BankProfile> => {
  const bankProfile = await prisma.bankProfile.findFirst({});
  if (bankProfile) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `already have a bank Profile. id: ${bankProfile.id}`
    );
  }
  const result = await prisma.bankProfile.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<BankProfile>[]> => {
  const result = await prisma.bankProfile.findMany({
    include: {
      bankBalances: {
        select: {
          id: true,
          balance: true,
          currency: true,
        },
      },
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<BankProfile | null>> => {
  const result = await prisma.bankProfile.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<BankProfile>
): Promise<Partial<BankProfile>> => {
  const result = await prisma.bankProfile.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.bankProfile.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const BankProfileService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
