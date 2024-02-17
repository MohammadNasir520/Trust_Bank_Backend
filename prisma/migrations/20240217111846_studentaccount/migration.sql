/*
  Warnings:

  - Added the required column `accountId` to the `StudentAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StudentAccount" ADD COLUMN     "accountId" TEXT NOT NULL;
