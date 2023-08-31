/*
  Warnings:

  - You are about to alter the column `price` on the `Bill` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `discount` on the `Bill` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE "Bill" ALTER COLUMN "price" SET DATA TYPE DECIMAL(5,2),
ALTER COLUMN "discount" SET DATA TYPE DECIMAL(5,2);
