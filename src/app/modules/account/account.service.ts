import { Accounts } from '@prisma/client';

import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';
import { sendEMail } from '../../../utils/sendMail';
import { createNewIdNumber } from './account.utils';

const insertIntoDB = async (
  data: Accounts,
  authUser: JwtPayload
): Promise<Accounts> => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: authUser.userId,
    },
  });
  console.log('finduser', findUser);

  data.userId = authUser.userId;

  const id = await createNewIdNumber(data?.accountType);
  data.accountId = id;

  const result = await prisma.accounts.create({
    data,
  });
  const subject = 'congratulations your Trust Bank account has been created';
  const from = process.env.Email;
  const html = `<p> Account ID: ${id}`;
  console.log(findUser);

  if (findUser) {
    sendEMail(from, findUser.email, subject, html);
  }
  return result;
};

const getAllFromDB = async (): Promise<Partial<Accounts>[]> => {
  const result = await prisma.accounts.findMany({});
  return result;
};

const getByIdFromDB = async (id: string): Promise<Partial<Accounts | null>> => {
  const result = await prisma.accounts.findUnique({
    where: {
      id: id,
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
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.accounts.delete({
    where: {
      id: id,
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
