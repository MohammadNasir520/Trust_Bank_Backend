import { Card } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: Card,
  authUser: JwtPayload
): Promise<Card> => {
  console.log('authUser', authUser);
  data.userId = authUser.userId;
  const result = await prisma.card.create({
    data,
    include: {
      user: true,
    },
  });
  return result;
};

const getAllFromDB = async (): Promise<Partial<Card>[]> => {
  const result = await prisma.card.findMany({
    include: {
      user: true,
    },
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<Partial<Card | null>> => {
  const result = await prisma.card.findUnique({
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
  payload: Partial<Card>
): Promise<Partial<Card>> => {
  const result = await prisma.card.update({
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
  const result = await prisma.card.delete({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return result;
};

export const CardService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
