/*
  Warnings:

  - Added the required column `contactVet` to the `apponitments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apponitments" ADD COLUMN     "contactVet" TEXT NOT NULL;
