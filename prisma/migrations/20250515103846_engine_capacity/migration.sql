/*
  Warnings:

  - You are about to drop the column `capacity` on the `Specs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Specs" DROP COLUMN "capacity",
ADD COLUMN     "engineCapacity" INTEGER;
