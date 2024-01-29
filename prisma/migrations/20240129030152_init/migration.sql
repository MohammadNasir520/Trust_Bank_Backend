/*
  Warnings:

  - Added the required column `condition` to the `DebitCreditCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DebitCreditCard" ADD COLUMN     "condition" JSONB NOT NULL;
