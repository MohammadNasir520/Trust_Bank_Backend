/*
  Warnings:

  - You are about to drop the column `balance` on the `BankProfile` table. All the data in the column will be lost.
  - You are about to drop the column `totalAccount` on the `BankProfile` table. All the data in the column will be lost.
  - You are about to drop the column `totalEmployee` on the `BankProfile` table. All the data in the column will be lost.
  - You are about to drop the column `totalTransactionAmount` on the `BankProfile` table. All the data in the column will be lost.
  - You are about to drop the column `totalTransactionNumber` on the `BankProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BankProfile" DROP COLUMN "balance",
DROP COLUMN "totalAccount",
DROP COLUMN "totalEmployee",
DROP COLUMN "totalTransactionAmount",
DROP COLUMN "totalTransactionNumber";

-- CreateTable
CREATE TABLE "BankBalance" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "bankProfileId" TEXT NOT NULL,

    CONSTRAINT "BankBalance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BankBalance" ADD CONSTRAINT "BankBalance_bankProfileId_fkey" FOREIGN KEY ("bankProfileId") REFERENCES "BankProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
