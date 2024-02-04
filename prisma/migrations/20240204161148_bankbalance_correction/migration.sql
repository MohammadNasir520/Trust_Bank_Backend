/*
  Warnings:

  - The `bankBalances` column on the `BankProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "BankProfile" DROP COLUMN "bankBalances",
ADD COLUMN     "bankBalances" JSONB[];
