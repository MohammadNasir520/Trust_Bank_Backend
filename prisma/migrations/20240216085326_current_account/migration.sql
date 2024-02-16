-- CreateTable
CREATE TABLE "CurrentAccount" (
    "id" SERIAL NOT NULL,
    "fName" TEXT NOT NULL,
    "mName" TEXT,
    "lName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "blood" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "emergencyContactNo" TEXT NOT NULL,
    "tradLicenceNo" TEXT NOT NULL,
    "tinNumber" TEXT NOT NULL,
    "businessName" TEXT,
    "businessType" TEXT,
    "taxId" TEXT NOT NULL,
    "nidNumber" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "annualIncome" DOUBLE PRECISION NOT NULL,
    "poa" TEXT NOT NULL,
    "citizen" BOOLEAN NOT NULL,
    "presentAddress" TEXT NOT NULL,
    "parmanentAddress" TEXT NOT NULL,
    "nominyName" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "nominyOccupation" TEXT NOT NULL,
    "nominyPhone" TEXT NOT NULL,
    "nominyNID" TEXT NOT NULL,
    "nominyAddress" TEXT NOT NULL,
    "nominyPhoto" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CurrentAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CurrentAccount" ADD CONSTRAINT "CurrentAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
