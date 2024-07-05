import { useEffect, useState } from "react";
import Blog from "./blog";
export default function BlogList() {
    const [blogs, setBlogs] = useState<BlogSummary[]>([]);

    useEffect(() => {
        getBlogs();
    }, []);

    async function getBlogs() {
        try {
            const res = await fetch(
                process.env.DATA_API_KEY_FE + "/api/blog/summary",
                {
                    next: {
                        revalidate: 86400,
                    },
                    cache: "force-cache",
                }
            );
            if (res.ok) {
                const blogs = await res.json();
                setBlogs(blogs);
            } else {
                alert("Failed to fetch data at blog list");
            }
        } catch (error: any) {
            alert("Failed to fetch data at blog list");
        }
    }

    return (
        <div className="w-full h-auto mt-4">
            {blogs?.map((blog) => (
                <Blog key={blog.id} {...blog} />
            ))}
        </div>
    );
}
