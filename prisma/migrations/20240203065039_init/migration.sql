-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('super_admin', 'admin', 'client', 'manager');

-- CreateEnum
CREATE TYPE "loanStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateEnum
CREATE TYPE "cardType" AS ENUM ('credit', 'debit');

-- CreateEnum
CREATE TYPE "CardStatus" AS ENUM ('accepted', 'pending', 'rejected');

-- CreateEnum
CREATE TYPE "sendMoneyStatus" AS ENUM ('pending', 'sent');

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
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
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
    "guarantorAddress" TEXT NOT NULL
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
    "guarantorAddress" TEXT NOT NULL
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
    "guarantorAddress" TEXT NOT NULL
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

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_id_key" ON "accounts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_accountId_key" ON "accounts"("accountId");

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
CREATE UNIQUE INDEX "Card_id_key" ON "Card"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SendMoney_id_key" ON "SendMoney"("id");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebitCreditCardCondition" ADD CONSTRAINT "DebitCreditCardCondition_DebitCreditCardId_fkey" FOREIGN KEY ("DebitCreditCardId") REFERENCES "DebitCreditCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgricultureLoan" ADD CONSTRAINT "AgricultureLoan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
