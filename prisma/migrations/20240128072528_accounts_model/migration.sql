/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropTable
DROP TABLE "Account";

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "education" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "citizenShip" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_accountId_key" ON "accounts"("accountId");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
