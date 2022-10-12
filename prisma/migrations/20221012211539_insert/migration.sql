/*
  Warnings:

  - A unique constraint covering the columns `[id,writtenById]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Blog_id_writtenById_key" ON "Blog"("id", "writtenById");
