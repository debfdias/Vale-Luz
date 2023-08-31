-- CreateEnum
CREATE TYPE "TypeAddress" AS ENUM ('HOUSE', 'APARTMENT', 'OTHER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "credits" DECIMAL(5,2) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contractNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "type" "TypeAddress" NOT NULL DEFAULT 'OTHER',
    "isValid" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contract_userId_key" ON "Contract"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_contractNumber_key" ON "Contract"("contractNumber");

-- CreateIndex
CREATE INDEX "Contract_userId_idx" ON "Contract"("userId");

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
