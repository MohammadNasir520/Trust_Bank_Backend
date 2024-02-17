/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `MerchentAccount` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `SavingAccount` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `StudentAccount` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `currentAcount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MerchentAccount_userId_key" ON "MerchentAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SavingAccount_userId_key" ON "SavingAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentAccount_userId_key" ON "StudentAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "currentAcount_userId_key" ON "currentAcount"("userId");
