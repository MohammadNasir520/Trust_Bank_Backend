//@ts-nocheck

import { CorporateLoan } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: CorporateLoan,
  authUser: JwtPayload
): Promise<CorporateLoan> => {
  console.log('authUser', authUser);
  data.userId = authUser.userId;
  const result = await prisma.corporateLoan.create({
    data,
    include: {
      user: true,
    },
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<CorporateLoan>[]> => {
  const result = await prisma.corporateLoan.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<CorporateLoan | null>> => {
  const result = await prisma.corporateLoan.findUnique({
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
  payload: Partial<CorporateLoan>
): Promise<Partial<CorporateLoan>> => {
  console.log('corporate loan : ', payload);
  const result = await prisma.corporateLoan.update({
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
  const result = await prisma.corporateLoan.delete({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

export const CorporateLoanService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
