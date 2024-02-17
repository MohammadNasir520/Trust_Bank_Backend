/*
  Warnings:

  - You are about to drop the column `userBalanceId` on the `currentAcount` table. All the data in the column will be lost.
  - Added the required column `balance` to the `currentAcount` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "currentAcount" DROP CONSTRAINT "currentAcount_userBalanceId_fkey";

-- AlterTable
ALTER TABLE "currentAcount" DROP COLUMN "userBalanceId",
ADD COLUMN     "balance" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "CurrentAccountBalance" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "CurrentAccountBalance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CurrentAccountBalance_id_key" ON "CurrentAccountBalance"("id");

-- AddForeignKey
ALTER TABLE "CurrentAccountBalance" ADD CONSTRAINT "CurrentAccountBalance_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "currentAcount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
