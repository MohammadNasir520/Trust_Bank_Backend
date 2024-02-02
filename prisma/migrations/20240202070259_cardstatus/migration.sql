-- CreateEnum
CREATE TYPE "CardStatus" AS ENUM ('accepted', 'pending', 'rejected');

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "status" "CardStatus" NOT NULL DEFAULT 'pending';
