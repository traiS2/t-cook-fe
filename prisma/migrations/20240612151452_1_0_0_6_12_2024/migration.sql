-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('active', 'inactive', 'suspended', 'pending', 'banned', 'closed');

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refesher_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'user',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_token" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "blog" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "level_of_difficult" INTEGER NOT NULL,
    "cooking_time" INTEGER NOT NULL,
    "serving_size" INTEGER NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3),
    "userID" TEXT NOT NULL,
    "statusID" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredient" (
    "id" INTEGER NOT NULL,
    "blog_id" INTEGER NOT NULL,

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("id","blog_id")
);

-- CreateTable
CREATE TABLE "recipe" (
    "id" INTEGER NOT NULL,
    "blog_id" INTEGER NOT NULL,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("id","blog_id")
);

-- CreateTable
CREATE TABLE "detail_recipe" (
    "id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "blogID" INTEGER NOT NULL,

    CONSTRAINT "detail_recipe_pkey" PRIMARY KEY ("id","recipe_id","blogID")
);

-- CreateTable
CREATE TABLE "recipe_image" (
    "id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "blog_id" INTEGER NOT NULL,

    CONSTRAINT "recipe_image_pkey" PRIMARY KEY ("id","recipe_id","blog_id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_tag" (
    "tag_id" INTEGER NOT NULL,
    "blog_id" INTEGER NOT NULL,

    CONSTRAINT "blog_tag_pkey" PRIMARY KEY ("tag_id","blog_id")
);

-- CreateTable
CREATE TABLE "introduction" (
    "id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "blog_id" INTEGER NOT NULL,

    CONSTRAINT "introduction_pkey" PRIMARY KEY ("id","blog_id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_category" (
    "category_id" INTEGER NOT NULL,
    "blog_id" INTEGER NOT NULL,

    CONSTRAINT "blog_category_pkey" PRIMARY KEY ("category_id","blog_id")
);

-- CreateTable
CREATE TABLE "primary_category" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status_id" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',

    CONSTRAINT "primary_category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_provider_provider_account_id_key" ON "account"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_identifier_token_key" ON "verification_token"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "blog_link_key" ON "blog"("link");

-- CreateIndex
CREATE UNIQUE INDEX "detail_recipe_recipe_id_blogID_key" ON "detail_recipe"("recipe_id", "blogID");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_image_recipe_id_blog_id_key" ON "recipe_image"("recipe_id", "blog_id");

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_userID_fkey" FOREIGN KEY ("userID") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe" ADD CONSTRAINT "recipe_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detail_recipe" ADD CONSTRAINT "detail_recipe_recipe_id_blogID_fkey" FOREIGN KEY ("recipe_id", "blogID") REFERENCES "recipe"("id", "blog_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_image" ADD CONSTRAINT "recipe_image_recipe_id_blog_id_fkey" FOREIGN KEY ("recipe_id", "blog_id") REFERENCES "recipe"("id", "blog_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_tag" ADD CONSTRAINT "blog_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_tag" ADD CONSTRAINT "blog_tag_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "introduction" ADD CONSTRAINT "introduction_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_category" ADD CONSTRAINT "blog_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_category" ADD CONSTRAINT "blog_category_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
