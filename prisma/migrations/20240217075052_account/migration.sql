/*
  Warnings:

  - Added the required column `accountId` to the `SavingAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SavingAccount" ADD COLUMN     "accountId" TEXT NOT NULL;
