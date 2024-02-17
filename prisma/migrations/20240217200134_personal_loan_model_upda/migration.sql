/*
  Warnings:

  - You are about to drop the column `accountsId` on the `UserBalance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserBalance" DROP CONSTRAINT "UserBalance_accountsId_fkey";

-- AlterTable
ALTER TABLE "UserBalance" DROP COLUMN "accountsId",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
