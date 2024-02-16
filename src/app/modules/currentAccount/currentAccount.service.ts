import { CurrentAccount } from '@prisma/client';

import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { sendEMail } from '../../../utils/sendMail';
import { createNewIdNumber } from './currentAccount.utils';

const insertIntoDB = async (
  data: CurrentAccount,
  authUser: JwtPayload
): Promise<CurrentAccount> => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: authUser.userId,
    },
  });
  console.log('finduser', findUser);
  if (!authUser.userId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'please login first');
  }

  const findAccount = await prisma.currentAccount.findFirst({
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
  const result = await prisma.currentAccount.create({
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

const getAllFromDB = async (): Promise<Partial<CurrentAccount>[]> => {
  const result = await prisma.currentAccount.findMany({
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
      CurrentAccountBalance: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<CurrentAccount | null>> => {
  const result = await prisma.currentAccount.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<CurrentAccount>
): Promise<Partial<CurrentAccount>> => {
  const result = await prisma.currentAccount.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.currentAccount.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const CurrentAccountService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
