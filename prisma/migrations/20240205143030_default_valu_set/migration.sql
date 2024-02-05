-- AlterTable
ALTER TABLE "BankBalance" ALTER COLUMN "balance" SET DEFAULT 0,
ALTER COLUMN "currency" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "UserBalance" ALTER COLUMN "currency" SET DEFAULT 'USD',
ALTER COLUMN "balance" SET DEFAULT 0;
