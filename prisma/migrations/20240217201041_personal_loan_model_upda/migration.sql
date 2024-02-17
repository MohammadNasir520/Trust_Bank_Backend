-- AlterTable
ALTER TABLE "UserBalance" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
