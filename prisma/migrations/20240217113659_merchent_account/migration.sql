-- CreateTable
CREATE TABLE "MerchentAccount" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "accountType" "AccountType" NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyType" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "tradLicenceNo" TEXT NOT NULL,
    "tinNumber" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "companyPhoto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MerchentAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MerchentAccountBalance" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "MerchentAccountBalance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MerchentAccount_id_key" ON "MerchentAccount"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MerchentAccountBalance_id_key" ON "MerchentAccountBalance"("id");

-- AddForeignKey
ALTER TABLE "MerchentAccount" ADD CONSTRAINT "MerchentAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MerchentAccountBalance" ADD CONSTRAINT "MerchentAccountBalance_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "MerchentAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
