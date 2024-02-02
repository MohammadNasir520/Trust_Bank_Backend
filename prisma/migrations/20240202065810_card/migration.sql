/*
  Warnings:

  - You are about to drop the column `email` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Card` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "number",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;