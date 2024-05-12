"use client";
import { BlogCustom } from "@/app/components";
import { CreateBlogContext } from "@/app/hook/create-blog-context/create-blog-context";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [blog, setBlog] = useState<BlogCreationState>({
        title: "",
        category: [],
        image: {
            image: "/t-cook-logo-d.png",
            url: "",
            file: "",
        },
        introduction: [""],
        levelOfDifficulty: 1,
        cookingTime: 90,
        servingSize: 0,
        ingredient: [],
        recipe: [
            {
                name: "",
                detailRecipe: [""],
                image: {
                    image: "",
                    url: "",
                    file: "",
                },      
            },
        ],
        tag: [],
    });

    return (
        <CreateBlogContext.Provider value={{ blog, setBlog }}>
            <div className="flex w-full">
                <div className="flex h-auto w-1/2">{children}</div>
                <div className="w-1/2 overflow-y-auto">
                    <BlogCustom blog={blog} />
                </div>
            </div>
        </CreateBlogContext.Provider>
    );
}
