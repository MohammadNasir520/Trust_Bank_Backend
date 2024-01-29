/*
  Warnings:

  - You are about to drop the `condition` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `condition` to the `DebitCreditCard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "condition" DROP CONSTRAINT "condition_debitCreditCardId_fkey";

-- AlterTable
ALTER TABLE "DebitCreditCard" ADD COLUMN     "condition" JSONB NOT NULL;

-- DropTable
DROP TABLE "condition";
