/*
  Warnings:

  - You are about to drop the column `userId` on the `UserBalance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserBalance" DROP CONSTRAINT "UserBalance_userId_fkey";

-- AlterTable
ALTER TABLE "UserBalance" DROP COLUMN "userId";
