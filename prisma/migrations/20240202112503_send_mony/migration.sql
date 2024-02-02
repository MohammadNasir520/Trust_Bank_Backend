/*
  Warnings:

  - You are about to drop the `sendMoney` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "sendMoney";

-- CreateTable
CREATE TABLE "SendMoney" (
    "id" TEXT NOT NULL,
    "swiftCode" TEXT NOT NULL,
    "sellerAccountId" TEXT NOT NULL,
    "userAccountId" TEXT NOT NULL,
    "sentStatus" "sendMoneyStatus" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SendMoney_id_key" ON "SendMoney"("id");
