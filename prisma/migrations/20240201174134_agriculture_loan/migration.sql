/*
  Warnings:

  - Added the required column `userId` to the `AgricultureLoan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "loanStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- AlterTable
ALTER TABLE "AgricultureLoan" ADD COLUMN     "status" "loanStatus" NOT NULL DEFAULT 'pending',
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "loanAmount" TEXT NOT NULL,
    "employmentStatus" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "ssn" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "annualIncome" TEXT NOT NULL,
    "nidNumber" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "creditScore" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_id_key" ON "Card"("id");

-- AddForeignKey
ALTER TABLE "AgricultureLoan" ADD CONSTRAINT "AgricultureLoan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
