/*
  Warnings:

  - You are about to drop the `recipe_image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "recipe_image" DROP CONSTRAINT "recipe_image_recipe_id_blog_id_fkey";

-- DropIndex
DROP INDEX "detail_recipe_recipe_id_blogID_key";

-- DropTable
DROP TABLE "recipe_image";

-- CreateTable
CREATE TABLE "image_recipe" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "blog_id" INTEGER NOT NULL,

    CONSTRAINT "image_recipe_pkey" PRIMARY KEY ("id","recipe_id","blog_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "image_recipe_recipe_id_blog_id_key" ON "image_recipe"("recipe_id", "blog_id");

-- AddForeignKey
ALTER TABLE "image_recipe" ADD CONSTRAINT "image_recipe_recipe_id_blog_id_fkey" FOREIGN KEY ("recipe_id", "blog_id") REFERENCES "recipe"("id", "blog_id") ON DELETE RESTRICT ON UPDATE CASCADE;
