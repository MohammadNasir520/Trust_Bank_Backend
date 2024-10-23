-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('super_admin', 'admin', 'client', 'manager');

-- CreateEnum
CREATE TYPE "loanStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "loan_scheme_category" AS ENUM ('agriculture', 'corporate', 'education', 'personal');

-- CreateEnum
CREATE TYPE "cardType" AS ENUM ('credit', 'debit');

-- CreateEnum
CREATE TYPE "CardStatus" AS ENUM ('accepted', 'pending', 'rejected');

-- CreateEnum
CREATE TYPE "sendMoneyStatus" AS ENUM ('pending', 'sent');

-- CreateEnum
CREATE TYPE "UserTransactionType" AS ENUM ('deposit', 'withdraw', 'currencyExchanges');

-- CreateTable
CREATE TABLE "BankProfile" (
    "id" TEXT NOT NULL DEFAULT 'trust-bank-1234',
    "bankName" TEXT NOT NULL,
    "branchName" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "BankProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankBalance" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "bankProfileId" TEXT NOT NULL,

    CONSTRAINT "BankBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'client',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

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
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

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

-- CreateTable
CREATE TABLE "UserBalance" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "UserBalance_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "DebitCreditCardCondition" (
    "id" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "limit" INTEGER NOT NULL,
    "offer" INTEGER NOT NULL,
    "DebitCreditCardId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AgricultureLoan" (
    "id" TEXT NOT NULL,
    "loanName" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "cropType" TEXT NOT NULL,
    "landSize" TEXT NOT NULL,
    "guarantorName" TEXT NOT NULL,
    "guarantorPhone" TEXT NOT NULL,
    "guarantorAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "loanStatus" NOT NULL DEFAULT 'pending'
);

-- CreateTable
CREATE TABLE "PersonalLoan" (
    "id" TEXT NOT NULL,
    "loanName" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "employment" TEXT NOT NULL,
    "income" TEXT NOT NULL,
    "guarantorName" TEXT NOT NULL,
    "guarantorPhone" TEXT NOT NULL,
    "guarantorAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "loanStatus" NOT NULL DEFAULT 'pending'
);

-- CreateTable
CREATE TABLE "CorporateLoan" (
    "id" TEXT NOT NULL,
    "loanName" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "businessType" TEXT NOT NULL,
    "turnover" TEXT NOT NULL,
    "guarantorName" TEXT NOT NULL,
    "guarantorPhone" TEXT NOT NULL,
    "guarantorAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "loanStatus" NOT NULL DEFAULT 'pending'
);

-- CreateTable
CREATE TABLE "EducationLoan" (
    "id" TEXT NOT NULL,
    "loanName" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "guarantorName" TEXT NOT NULL,
    "guarantorPhone" TEXT NOT NULL,
    "guarantorAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "loanStatus" NOT NULL DEFAULT 'pending'
);

-- CreateTable
CREATE TABLE "LoanScheme" (
    "id" TEXT NOT NULL,
    "scheme_category" "loan_scheme_category" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "amount" INTEGER NOT NULL,
    "purpose" JSONB,
    "elibility" JSONB,
    "facility_types" JSONB,
    "amount_terms" JSONB,
    "interest_rates" JSONB,
    "repayment" JSONB,
    "security" JSONB
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "loanAmount" TEXT NOT NULL,
    "employmentStatus" TEXT NOT NULL,
    "cardType" "cardType" NOT NULL,
    "birthDate" TEXT NOT NULL,
    "ssn" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "annualIncome" TEXT NOT NULL,
    "nidNumber" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "creditScore" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "CardStatus" NOT NULL DEFAULT 'pending'
);

-- CreateTable
CREATE TABLE "SendMoney" (
    "id" TEXT NOT NULL,
    "swiftCode" TEXT NOT NULL,
    "sellerAccountId" TEXT NOT NULL,
    "userAccountId" TEXT NOT NULL,
    "sentStatus" "sendMoneyStatus" NOT NULL DEFAULT 'pending'
);

-- CreateTable
CREATE TABLE "CurrencyExchange" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fromCurrency" TEXT NOT NULL,
    "toCurrency" TEXT NOT NULL,
    "fromAmount" DOUBLE PRECISION NOT NULL,
    "toAmount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CurrencyExchange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTransaction" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_id_key" ON "accounts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_accountId_key" ON "accounts"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "currentAcount_id_key" ON "currentAcount"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserBalance_id_key" ON "UserBalance"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DebitCreditCard_id_key" ON "DebitCreditCard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DebitCreditCardCondition_id_key" ON "DebitCreditCardCondition"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AgricultureLoan_id_key" ON "AgricultureLoan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalLoan_id_key" ON "PersonalLoan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateLoan_id_key" ON "CorporateLoan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EducationLoan_id_key" ON "EducationLoan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "LoanScheme_id_key" ON "LoanScheme"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Card_id_key" ON "Card"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SendMoney_id_key" ON "SendMoney"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CurrencyExchange_id_key" ON "CurrencyExchange"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserTransaction_id_key" ON "UserTransaction"("id");

-- AddForeignKey
ALTER TABLE "BankBalance" ADD CONSTRAINT "BankBalance_bankProfileId_fkey" FOREIGN KEY ("bankProfileId") REFERENCES "BankProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "currentAcount" ADD CONSTRAINT "currentAcount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "currentAcount" ADD CONSTRAINT "currentAcount_userBalanceId_fkey" FOREIGN KEY ("userBalanceId") REFERENCES "UserBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebitCreditCardCondition" ADD CONSTRAINT "DebitCreditCardCondition_DebitCreditCardId_fkey" FOREIGN KEY ("DebitCreditCardId") REFERENCES "DebitCreditCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgricultureLoan" ADD CONSTRAINT "AgricultureLoan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalLoan" ADD CONSTRAINT "PersonalLoan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CorporateLoan" ADD CONSTRAINT "CorporateLoan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EducationLoan" ADD CONSTRAINT "EducationLoan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CurrencyExchange" ADD CONSTRAINT "CurrencyExchange_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTransaction" ADD CONSTRAINT "UserTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
