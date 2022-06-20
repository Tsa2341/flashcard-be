/*
  Warnings:

  - A unique constraint covering the columns `[userId,flashcardId]` on the table `UserReadFlashcard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserReadFlashcard_userId_flashcardId_key" ON "UserReadFlashcard"("userId", "flashcardId");
