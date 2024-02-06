/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `CurrencyExchange` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CurrencyExchange_id_key" ON "CurrencyExchange"("id");
