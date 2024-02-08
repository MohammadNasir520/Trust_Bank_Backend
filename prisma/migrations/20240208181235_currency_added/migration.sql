/*
  Warnings:

  - Added the required column `currency` to the `UserTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserTransaction" ADD COLUMN     "currency" TEXT NOT NULL;
