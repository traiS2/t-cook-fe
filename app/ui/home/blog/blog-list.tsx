import { Suspense, useEffect, useState } from "react";
import Blog from "./blog";
import Link from "next/link";
import clsx from "clsx";
export const dynamic = "force-dynamic";
interface BlogListProps {
    position: number;
}

export default function BlogList({ position }: BlogListProps) {
    const [blogs, setBlogs] = useState<BlogSummary[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0);
    const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
    async function getBlogs() {
        try {
            const res = await fetch(
                process.env.DATA_API_KEY_FE +
                    "/api/blog/summary?position=" +
                    position
                // {
                //     next: {
                //         revalidate: 86400,
                //     },
                //     cache: "force-cache",
                // }
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
        }
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <Suspense fallback={<Loading />}>
            <div className="w-full h-auto mt-4">
                {blogs?.map((blog) => (
                    <Blog key={blog.id} {...blog} />
                ))}
                <div className="flex justify-center items-center gap-1 mb-4 mt-[-16px]">
                    {pageNumbers.map((number) => (
                        <Link href={`/blog/page/${number}`}>
                            <p
                                className={clsx(
                                    "flex justify-center items-center w-6 h-6 font-semibold text-second-color  border-[1px] border-second-color hover:bg-fifth-color hover:text-white",
                                    {
                                        "bg-fifth-color text-white":
                                            number === position,
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
        </Suspense>
    );
}
function Loading() {
    return <h2>🌀 Loadingasfasdffdfdfasdfasfasdfasfasfasfasdfadfasdf...</h2>;
}
