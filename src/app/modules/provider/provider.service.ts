import { Provider } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertProviderIntoDB = async (
  data: Provider
): Promise<Partial<Provider>> => {
  const result = await prisma.provider.create({
    data,
  });

  return result;
};

const getProvidersFromDB = async (): Promise<Partial<Provider>[]> => {
  const result = await prisma.provider.findMany({});
  return result;
};

export const ProviderServices = {
  insertProviderIntoDB,
  getProvidersFromDB,
};
