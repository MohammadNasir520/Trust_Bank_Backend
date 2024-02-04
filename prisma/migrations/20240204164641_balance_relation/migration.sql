/*
  Warnings:

  - You are about to drop the column `balances` on the `BankBalance` table. All the data in the column will be lost.
  - Added the required column `balance` to the `BankBalance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `BankBalance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BankBalance" DROP COLUMN "balances",
ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL;
