"use client";
import { Blog, BlogList } from "@/app/ui";
import Loading from "./loading";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
export default function Page({ params }: { params: { position: string } }) {
    const [blogs, setBlogs] = useState<BlogSummary[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0);
    const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
    const [isLoading, setIsLoading] = useState(true);

    const getBlogs = async () => {
        try {
            const res = await fetch(
                process.env.DATA_API_KEY_FE +
                    "/api/blog/summary?position=" +
                    params.position,

                {
                    mode: 'no-cors',
                    headers: { "Content-Type": "application/json" },
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
            } else {
                alert("Failed to fetch data at blog list");
            }
        } catch (error: any) {
            alert("Failed to fetch data at blog list");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBlogs();
    }, [params.position]);

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
                                            number ===
                                            parseInt(params.position),
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
