import { PayBill } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertPayBillIntoDB = async (
  data: PayBill
): Promise<Partial<PayBill>> => {
  const result = await prisma.payBill.create({
    data,
  });

  return result;
};

const getPayBillsFromDB = async (): Promise<Partial<PayBill>[]> => {
  const result = await prisma.payBill.findMany({});
  return result;
};

export const PayBillServices = {
  insertPayBillIntoDB,
  getPayBillsFromDB,
};
