import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const getByIdFromDB = async (user: JwtPayload): Promise<Partial<User>> => {
  const result = await prisma.user.findUnique({
    where: {
      id: user.userId,
    },
    include: {
      accounts: {
        include: {
          userBalances: true,
        },
      },
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'your profile does not exist');
  }
  // eslint-disable-next-line no-unused-vars
  const { password, ...restData } = result;
  return restData;
};
const updateByIdFromDB = async (
  user: JwtPayload,
  data: Partial<User>
): Promise<Partial<User | null>> => {
  const result = await prisma.user.update({
    where: {
      id: user.userId,
    },
    data: data,
  });

  // eslint-disable-next-line no-unused-vars
  const { password, ...restData } = result;
  return restData;
};

export const ProfileService = {
  getByIdFromDB,
  updateByIdFromDB,
};
