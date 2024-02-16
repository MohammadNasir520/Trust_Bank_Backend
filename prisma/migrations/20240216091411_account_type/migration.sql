/*
  Warnings:

  - Added the required column `accountType` to the `CurrentAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CurrentAccount" ADD COLUMN     "accountType" TEXT NOT NULL;
