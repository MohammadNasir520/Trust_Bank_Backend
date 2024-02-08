import { UserTransaction } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Partial<UserTransaction>[]> => {
  const result = await prisma.userTransaction.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<UserTransaction | null>> => {
  const result = await prisma.userTransaction.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.userTransaction.delete({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

export const UserTransactionService = {
  getAllFromDB,
  getByIdFromDB,
  deleteFromDB,
};
