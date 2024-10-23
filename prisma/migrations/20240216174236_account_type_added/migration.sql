/*
  Warnings:

  - Changed the type of `accountType` on the `currentAcount` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('Current', 'Saving', 'Student', 'Merchant');

-- AlterTable
ALTER TABLE "currentAcount" DROP COLUMN "accountType",
ADD COLUMN     "accountType" "AccountType" NOT NULL;
