/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `CurrentAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CurrentAccount_id_key" ON "CurrentAccount"("id");
