-- CreateTable
CREATE TABLE "StudentAccount" (
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
    "institutionName" TEXT NOT NULL,
    "institutionType" TEXT NOT NULL,
    "institutionLocation" TEXT NOT NULL,
    "institutionContact" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "birthCertificateNumber" TEXT NOT NULL,
    "localGuargianName" TEXT NOT NULL,
    "localGuargianNid" TEXT NOT NULL,
    "localGuargianContact" TEXT NOT NULL,
    "localGuargianAddress" TEXT NOT NULL,
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
    "userId" TEXT NOT NULL,

    CONSTRAINT "StudentAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentAccountBalance" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "StudentAccountBalance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentAccount_id_key" ON "StudentAccount"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StudentAccountBalance_id_key" ON "StudentAccountBalance"("id");

-- AddForeignKey
ALTER TABLE "StudentAccount" ADD CONSTRAINT "StudentAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentAccountBalance" ADD CONSTRAINT "StudentAccountBalance_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "StudentAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
