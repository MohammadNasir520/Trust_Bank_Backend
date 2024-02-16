import { AgricultureLoan } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: AgricultureLoan,
  authUser: JwtPayload
): Promise<AgricultureLoan> => {
  console.log('authUser', authUser);
  data.userId = authUser.userId;
  const result = await prisma.agricultureLoan.create({
    data,
    include: {
      user: true,
    },
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<AgricultureLoan>[]> => {
  const result = await prisma.agricultureLoan.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<AgricultureLoan | null>> => {
  const result = await prisma.agricultureLoan.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<AgricultureLoan>
): Promise<Partial<AgricultureLoan>> => {
  console.log('agripayload', payload);
  const result = await prisma.agricultureLoan.update({
    where: {
      id: id,
    },
    data: payload,
    include: {
      user: true,
    },
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.agricultureLoan.delete({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

export const AgricultureLoanService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
