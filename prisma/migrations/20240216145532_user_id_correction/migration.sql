/*
  Warnings:

  - You are about to drop the `CurrentAccount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CurrentAccount" DROP CONSTRAINT "CurrentAccount_userBalanceId_fkey";

-- DropForeignKey
ALTER TABLE "CurrentAccount" DROP CONSTRAINT "CurrentAccount_userId_fkey";

-- DropTable
DROP TABLE "CurrentAccount";

-- CreateTable
CREATE TABLE "currentAcount" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "fName" TEXT NOT NULL,
    "mName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "blood" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "emergencyContactNo" TEXT NOT NULL,
    "tradLicenceNo" TEXT NOT NULL,
    "tinNumber" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "businessType" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "nidNumber" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "annualIncome" DOUBLE PRECISION NOT NULL,
    "poa" TEXT NOT NULL,
    "citizen" TEXT NOT NULL,
    "presentAddress" TEXT NOT NULL,
    "parmanentAddress" TEXT NOT NULL,
    "nominyName" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "nominyOccupation" TEXT NOT NULL,
    "nominyPhone" TEXT NOT NULL,
    "nominyNID" TEXT NOT NULL,
    "nominyAddress" TEXT NOT NULL,
    "nominyPhoto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "userBalanceId" TEXT NOT NULL,

    CONSTRAINT "currentAcount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "currentAcount_id_key" ON "currentAcount"("id");

-- AddForeignKey
ALTER TABLE "currentAcount" ADD CONSTRAINT "currentAcount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "currentAcount" ADD CONSTRAINT "currentAcount_userBalanceId_fkey" FOREIGN KEY ("userBalanceId") REFERENCES "UserBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
