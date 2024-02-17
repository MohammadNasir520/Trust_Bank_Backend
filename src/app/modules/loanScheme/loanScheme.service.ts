import { LoanScheme, loan_scheme_category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: any,
): Promise<LoanScheme> => {
  const result = await prisma.loanScheme.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<LoanScheme>[]> => {
  const result = await prisma.loanScheme.findMany({});
  return result;
};
const getAllByCategoryFromDB = async (category: loan_scheme_category): Promise<Partial<LoanScheme>[]> => {
  const result = await prisma.loanScheme.findMany({
    where: {
      scheme_category: category
    }
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<Partial<LoanScheme | null>> => {
  const result = await prisma.loanScheme.findUnique({
    where: {
      id: id,
    },

  });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: any
): Promise<Partial<LoanScheme>> => {
  const result = await prisma.loanScheme.update({
    where: {
      id: id,
    },
    data: payload,

  });
  return result;
};

const deleteFromDB = async (id: string) => {
  const result = await prisma.loanScheme.delete({
    where: {
      id: id,
    },

  });
  return result;
};

export const LoanSchemeService = {
  insertIntoDB,
  getAllFromDB,
  getAllByCategoryFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
