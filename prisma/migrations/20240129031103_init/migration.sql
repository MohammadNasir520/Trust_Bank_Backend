/*
  Warnings:

  - You are about to drop the column `condition` on the `DebitCreditCard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DebitCreditCard" DROP COLUMN "condition";

-- CreateTable
CREATE TABLE "DebitCreditCardCondition" (
    "id" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "limit" INTEGER NOT NULL,
    "offer" INTEGER NOT NULL,
    "DebitCreditCardId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DebitCreditCardCondition_id_key" ON "DebitCreditCardCondition"("id");

-- AddForeignKey
ALTER TABLE "DebitCreditCardCondition" ADD CONSTRAINT "DebitCreditCardCondition_DebitCreditCardId_fkey" FOREIGN KEY ("DebitCreditCardId") REFERENCES "DebitCreditCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
