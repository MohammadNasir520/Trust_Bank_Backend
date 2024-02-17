//@ts-nocheck

import { EducationLoan } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: EducationLoan,
  authUser: JwtPayload
): Promise<EducationLoan> => {
  console.log('authUser', authUser);
  data.userId = authUser.userId;
  const result = await prisma.educationLoan.create({
    data,
    include: {
      user: true,
    },
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<EducationLoan>[]> => {
  const result = await prisma.educationLoan.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

const getByIdFromDB = async (
  id: string
): Promise<Partial<EducationLoan | null>> => {
  const result = await prisma.educationLoan.findUnique({
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
  payload: Partial<EducationLoan>
): Promise<Partial<EducationLoan>> => {
  console.log('education loan : ', payload);
  const result = await prisma.educationLoan.update({
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
  const result = await prisma.educationLoan.delete({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

export const EducationLoanService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
