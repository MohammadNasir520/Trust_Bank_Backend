-- CreateTable
CREATE TABLE "sendMoney" (
    "id" TEXT NOT NULL,
    "swiftCode" TEXT NOT NULL,
    "sellerAccountId" TEXT NOT NULL,
    "userAccountId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "sendMoney_id_key" ON "sendMoney"("id");
