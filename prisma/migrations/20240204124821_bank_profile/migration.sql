-- CreateTable
CREATE TABLE "BankProfile" (
    "id" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "branchName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "totalTransactionAmount" DOUBLE PRECISION NOT NULL,
    "totalTransactionNumber" INTEGER NOT NULL,
    "totalAccount" INTEGER NOT NULL,
    "totalEmployee" INTEGER NOT NULL,

    CONSTRAINT "BankProfile_pkey" PRIMARY KEY ("id")
);
