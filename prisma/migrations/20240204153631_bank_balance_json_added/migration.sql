/*
  Warnings:

  - You are about to drop the `BankBalance` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bankBalances` to the `BankProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BankBalance" DROP CONSTRAINT "BankBalance_bankProfileId_fkey";

-- AlterTable
ALTER TABLE "BankProfile" ADD COLUMN     "bankBalances" JSONB NOT NULL;

-- DropTable
DROP TABLE "BankBalance";
