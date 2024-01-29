-- CreateTable
CREATE TABLE "DebitCreditCard" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "cardImg" TEXT NOT NULL,
    "benefits" TEXT[]
);

-- CreateTable
CREATE TABLE "condition" (
    "id" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "limit" INTEGER NOT NULL,
    "offer" INTEGER NOT NULL,
    "debitCreditCardId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DebitCreditCard_id_key" ON "DebitCreditCard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "condition_id_key" ON "condition"("id");

-- AddForeignKey
ALTER TABLE "condition" ADD CONSTRAINT "condition_debitCreditCardId_fkey" FOREIGN KEY ("debitCreditCardId") REFERENCES "DebitCreditCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
