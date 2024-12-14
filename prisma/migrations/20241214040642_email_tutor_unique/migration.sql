/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `tutor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tutor_email_key" ON "tutor"("email");
