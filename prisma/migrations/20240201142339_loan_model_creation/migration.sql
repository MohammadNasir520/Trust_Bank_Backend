-- CreateTable
CREATE TABLE "AgricultureLoan" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "cropType" TEXT NOT NULL,
    "landSize" TEXT NOT NULL,
    "guarantorName" TEXT NOT NULL,
    "guarantorPhone" TEXT NOT NULL,
    "guarantorAddress" TEXT NOT NULL
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

-- CreateIndex
CREATE UNIQUE INDEX "AgricultureLoan_id_key" ON "AgricultureLoan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalLoan_id_key" ON "PersonalLoan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CorporateLoan_id_key" ON "CorporateLoan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EducationLoan_id_key" ON "EducationLoan"("id");
