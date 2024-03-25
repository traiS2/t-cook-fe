"use client";
import { BlogCustom } from "@/app/components";
import { CreateBlogContext } from "@/app/hook/create-blog-context/create-blog-context";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [blog, setBlog] = useState<any>({
    id: 0,
    link: "",
    title: "",
    category: "",
    image: "/t-cook-logo-d.png",
    introduction: [""],
    levelOfDifficulty: 1,
    cookingTime: 90,
    servingSize: 0,
    ingredients: [],
    recipes: [
      {
        name: "",
        detailsRecipe: [""],
      },
    ],
    date: "",
    tags: [],
    user: "",
  });
  return (
    <CreateBlogContext.Provider value={{ blog, setBlog }}>
      <div className="flex w-full">
        <div className="flex h-auto w-1/2">{children}</div>
        <div className="w-1/2">
          <BlogCustom blog={blog} />
        </div>
      </div>
    </CreateBlogContext.Provider>
  );
}
