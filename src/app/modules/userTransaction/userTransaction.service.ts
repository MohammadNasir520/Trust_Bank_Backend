import { UserTransaction } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllDepositFromDB = async (): Promise<Partial<UserTransaction>[]> => {
  const result = await prisma.userTransaction.findMany({
    where: {
      type: 'deposit',
    },
    include: {
      user: true,
    },
  });
  return result;
};
const getAllWithdrawFromDB = async (): Promise<Partial<UserTransaction>[]> => {
  const result = await prisma.userTransaction.findMany({
    where: {
      type: 'withdraw',
    },
    include: {
      user: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<UserTransaction | null>> => {
  const result = await prisma.userTransaction.findFirst({
    where: {
      userId: id,
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
  getAllDepositFromDB,
  getAllWithdrawFromDB,
  getByIdFromDB,
  deleteFromDB,
};
