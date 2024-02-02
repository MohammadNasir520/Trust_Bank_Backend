/*
  Warnings:

  - Added the required column `sentStatus` to the `sendMoney` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "sendMoneyStatus" AS ENUM ('pending', 'sent');

-- AlterTable
ALTER TABLE "sendMoney" ADD COLUMN     "sentStatus" "sendMoneyStatus" NOT NULL;
