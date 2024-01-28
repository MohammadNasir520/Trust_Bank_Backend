/*
  Warnings:

  - You are about to drop the column `contactNo` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profileImg` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "contactNo",
DROP COLUMN "profileImg";
