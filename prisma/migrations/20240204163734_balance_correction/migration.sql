/*
  Warnings:

  - You are about to drop the column `balance` on the `BankBalance` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `BankBalance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BankBalance" DROP COLUMN "balance",
DROP COLUMN "currency",
ADD COLUMN     "balances" JSONB[];
