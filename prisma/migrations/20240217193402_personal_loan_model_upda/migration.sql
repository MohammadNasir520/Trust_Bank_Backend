/*
  Warnings:

  - A unique constraint covering the columns `[currency]` on the table `BankBalance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BankBalance_currency_key" ON "BankBalance"("currency");
