/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Trainers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Trainers_id_belongsToId_key" ON "Trainers"("id", "belongsToId");
