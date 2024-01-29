-- CreateTable
CREATE TABLE "Account" (
    "accountId" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "education" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "citizenShip" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_accountId_key" ON "Account"("accountId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
