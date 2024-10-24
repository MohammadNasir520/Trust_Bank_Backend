import prisma from '../../../shared/prisma';

// Account ID
export const findLastAccountId = async () => {
  const lastAccount = await prisma.merchentAccount.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  console.log(lastAccount[0]?.accountId);
  return lastAccount[0]?.accountId || 'Mr-00001';
};

export const createNewIdNumber = async (accountType: string) => {
  const lastAccountId = await findLastAccountId();

  const splitId = lastAccountId.split('-');
  console.log(splitId);
  const incrementId = (parseInt(splitId[1]) + 1).toString().padStart(5, '0');
  console.log('type', accountType);
  const splitAccountType = accountType.split('');

  const newAccountTd =
    splitAccountType[0] + splitAccountType[2] + '-' + incrementId;
  console.log(newAccountTd);
  return newAccountTd;
};
