/*
  Warnings:

  - Added the required column `expiredAt` to the `UserToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserToken" ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL;
