import { SendMoney } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: SendMoney,
  authUser: JwtPayload
): Promise<SendMoney> => {
  console.log('authUser', authUser);
  // data.userId = authUser.userId;
  const result = await prisma.sendMoney.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<SendMoney>[]> => {
  const result = await prisma.sendMoney.findMany({});
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<SendMoney | null>> => {
  const result = await prisma.sendMoney.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<SendMoney>
): Promise<Partial<SendMoney>> => {
  const result = await prisma.sendMoney.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.sendMoney.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const SendMoneyService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
