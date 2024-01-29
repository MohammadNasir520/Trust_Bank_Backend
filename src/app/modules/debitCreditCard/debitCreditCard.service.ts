import { DebitCreditCard } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: DebitCreditCard
): Promise<DebitCreditCard> => {
  console.log(data);

  const result = await prisma.debitCreditCard.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<DebitCreditCard>[]> => {
  const result = await prisma.debitCreditCard.findMany({});
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<DebitCreditCard | null>> => {
  const result = await prisma.debitCreditCard.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<DebitCreditCard>
): Promise<Partial<DebitCreditCard>> => {
  const result = await prisma.debitCreditCard.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.debitCreditCard.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const DebitCreditCardService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
