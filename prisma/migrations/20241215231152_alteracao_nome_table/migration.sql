/*
  Warnings:

  - You are about to drop the `disease` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "disease" DROP CONSTRAINT "disease_petsId_fkey";

-- DropTable
DROP TABLE "disease";

-- CreateTable
CREATE TABLE "medicalHistory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "diagnosticDate" TIMESTAMP(3) NOT NULL,
    "petsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medicalHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "medicalHistory" ADD CONSTRAINT "medicalHistory_petsId_fkey" FOREIGN KEY ("petsId") REFERENCES "pets"("id") ON DELETE SET NULL ON UPDATE CASCADE;
