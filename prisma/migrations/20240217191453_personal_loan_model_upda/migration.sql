-- DropForeignKey
ALTER TABLE "UserBalance" DROP CONSTRAINT "UserBalance_accountId_fkey";

-- AlterTable
ALTER TABLE "UserBalance" ADD COLUMN     "accountsId" TEXT;

-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_accountsId_fkey" FOREIGN KEY ("accountsId") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
