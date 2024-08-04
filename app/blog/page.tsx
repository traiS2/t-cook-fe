"use client";
import { Blog } from "@/app/ui";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./loading";
export default function Page() {
    const [blogs, setBlogs] = useState<BlogSummary[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0);
    const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
    const [isLoading, setIsLoading] = useState(true);

    const getBlogs = async () => {
        try {
            const res = await fetch(
                process.env.DATA_API_KEY_FE + "/api/blog/summary?position=1",
                {
                    cache: "force-cache",
                    next: {
                        revalidate: 8640,
                    },
                }
            );
            if (res.ok) {
                const data = await res.json();
                setBlogs(data.blog);
                setTotalPage(data.totalPage);
            }
        } catch (error: any) {
            alert("Error to fetch data at blog list" + error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="w-full  h-auto mt-4">
                {blogs?.map((blog) => (
                    <Blog key={blog.id} {...blog} />
                ))}
                <div className="flex justify-center items-center gap-1 mb-4 mt-[-16px]">
                    {pageNumbers.map((number, index) => (
                        <Link key={index} href={`/blog/page/${number}`}>
                            <p
                                className={clsx(
                                    "flex justify-center items-center w-6 h-6 font-semibold text-second-color  border-[1px] border-second-color hover:bg-fifth-color hover:text-white",
                                    {
                                        "bg-fifth-color text-white":
                                            number === 1,
                                    }
                                )}
                                key={number}
                            >
                                {number}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
