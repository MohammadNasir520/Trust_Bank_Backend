import { SavingAccount } from '@prisma/client';

import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { sendEMail } from '../../../utils/sendMail';
import { createNewIdNumber } from './savingAccount.utils';

const insertIntoDB = async (
  data: SavingAccount,
  authUser: JwtPayload
): Promise<SavingAccount> => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: authUser.userId,
    },
  });
  console.log('finduser', findUser);
  if (!authUser.userId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'please login first');
  }

  const findAccount = await prisma.savingAccount.findFirst({
    where: {
      userId: authUser.userId,
    },
  });
  if (findAccount) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'you already have an account');
  }

  const id = await createNewIdNumber(data?.accountType);
  data.accountId = id;
  console.log('user', data);
  const result = await prisma.savingAccount.create({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    data: {
      ...data,
      user: { connect: { id: authUser.userId } },
    },
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

const getAllFromDB = async (): Promise<Partial<SavingAccount>[]> => {
  const result = await prisma.savingAccount.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
          role: true,
          createdAt: true,
          id: true,
        },
      },
      savingAccountBalances: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<SavingAccount | null>> => {
  const result = await prisma.savingAccount.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<SavingAccount>
): Promise<Partial<SavingAccount>> => {
  const result = await prisma.savingAccount.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.savingAccount.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const SavingAccountService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
