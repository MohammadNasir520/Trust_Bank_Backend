/*
  Warnings:

  - The primary key for the `CurrentAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "CurrentAccount" DROP CONSTRAINT "CurrentAccount_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CurrentAccount_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CurrentAccount_id_seq";
