-- CreateTable
CREATE TABLE "SavingAccount" (
    "id" TEXT NOT NULL,
    "fName" TEXT NOT NULL,
    "mName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "accountType" "AccountType" NOT NULL,
    "gender" TEXT NOT NULL,
    "blood" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "emergencyContactNo" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyLocation" TEXT NOT NULL,
    "companyContact" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "nidNumber" TEXT NOT NULL,
    "citizen" TEXT NOT NULL,
    "presentAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "nominyName" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "nominyOccupation" TEXT NOT NULL,
    "nominyPhone" TEXT NOT NULL,
    "nominyNID" TEXT NOT NULL,
    "nominyAddress" TEXT NOT NULL,
    "nominyPhoto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavingAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavingAccountBalance" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "SavingAccountBalance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavingAccount_id_key" ON "SavingAccount"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SavingAccountBalance_id_key" ON "SavingAccountBalance"("id");

-- AddForeignKey
ALTER TABLE "SavingAccountBalance" ADD CONSTRAINT "SavingAccountBalance_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "SavingAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
