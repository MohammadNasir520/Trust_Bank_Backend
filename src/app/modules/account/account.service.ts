import { Accounts } from '@prisma/client';

import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Accounts): Promise<Accounts> => {
  console.log(data);
  const result = await prisma.accounts.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<Accounts>[]> => {
  const result = await prisma.accounts.findMany({});
  return result;
};

const getByIdFromDB = async (id: string): Promise<Partial<Accounts | null>> => {
  const result = await prisma.accounts.findUnique({
    where: {
      accountId: id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<Accounts>
): Promise<Partial<Accounts>> => {
  const result = await prisma.accounts.update({
    where: {
      accountId: id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.accounts.delete({
    where: {
      accountId: id,
    },
  });
  return result;
};

export const AccountService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
