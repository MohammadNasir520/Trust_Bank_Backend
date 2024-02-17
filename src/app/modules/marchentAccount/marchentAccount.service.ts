import { MerchentAccount } from '@prisma/client';

import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { sendEMail } from '../../../utils/sendMail';
import { createNewIdNumber } from './marchentAccount.utils';

const insertIntoDB = async (
  data: MerchentAccount,
  authUser: JwtPayload
): Promise<MerchentAccount> => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: authUser.userId,
    },
  });
  console.log('finduser', findUser);
  if (!authUser.userId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'please login first');
  }

  const findAccount = await prisma.merchentAccount.findFirst({
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
  const result = await prisma.merchentAccount.create({
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

const getAllFromDB = async (): Promise<Partial<MerchentAccount>[]> => {
  const result = await prisma.merchentAccount.findMany({
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
      merchentAccountBalance: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<MerchentAccount | null>> => {
  const result = await prisma.merchentAccount.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<MerchentAccount>
): Promise<Partial<MerchentAccount>> => {
  const result = await prisma.merchentAccount.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.merchentAccount.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const MerchentAccountService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
