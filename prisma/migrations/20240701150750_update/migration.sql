/*
  Warnings:

  - You are about to drop the column `statusID` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `blog` table. All the data in the column will be lost.
  - The primary key for the `recipe_image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `status_id` to the `blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "blog" DROP CONSTRAINT "blog_userID_fkey";

-- AlterTable
ALTER TABLE "blog" DROP COLUMN "statusID",
DROP COLUMN "userID",
ADD COLUMN     "status_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "recipe_image" DROP CONSTRAINT "recipe_image_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "recipe_image_pkey" PRIMARY KEY ("recipe_id", "blog_id");

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
