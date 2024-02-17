//@ts-nocheck

import { PersonalLoan } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: PersonalLoan,
  authUser: JwtPayload
): Promise<PersonalLoan> => {

  data.userId = authUser.userId;
  const result = await prisma.personalLoan.create({
    data,
    include: {
      user: true,
    },
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<PersonalLoan>[]> => {
  const result = await prisma.personalLoan.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<PersonalLoan | null>> => {
  const result = await prisma.personalLoan.findUnique({
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
  payload: Partial<PersonalLoan>
): Promise<Partial<PersonalLoan>> => {

  const result = await prisma.personalLoan.update({
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
  const result = await prisma.personalLoan.delete({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

export const PersonalLoanService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
