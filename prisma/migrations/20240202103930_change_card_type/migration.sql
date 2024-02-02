/*
  Warnings:

  - Added the required column `loanName` to the `AgricultureLoan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardType` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "cardType" AS ENUM ('credit', 'debit');

-- AlterTable
ALTER TABLE "AgricultureLoan" ADD COLUMN     "loanName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "cardType" "cardType" NOT NULL;
