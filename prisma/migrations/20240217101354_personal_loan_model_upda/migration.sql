/*
  Warnings:

  - You are about to drop the column `elibility` on the `LoanScheme` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LoanScheme" DROP COLUMN "elibility",
ADD COLUMN     "eligibility" JSONB;
