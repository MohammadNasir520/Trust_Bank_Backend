/*
  Warnings:

  - Added the required column `accountId` to the `CurrentAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userBalanceId` to the `CurrentAccount` table without a default value. This is not possible if the table is not empty.
  - Made the column `mName` on table `CurrentAccount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessName` on table `CurrentAccount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `businessType` on table `CurrentAccount` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CurrentAccount" ADD COLUMN     "accountId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userBalanceId" TEXT NOT NULL,
ALTER COLUMN "mName" SET NOT NULL,
ALTER COLUMN "businessName" SET NOT NULL,
ALTER COLUMN "businessType" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CurrentAccount" ADD CONSTRAINT "CurrentAccount_userBalanceId_fkey" FOREIGN KEY ("userBalanceId") REFERENCES "UserBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
