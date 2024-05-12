import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [blogBrief, setBlogBrief] = useState<BlogBrief[]>([]);
  useEffect(() => {
    getBlogBrief();
  }, []);

  async function getBlogBrief() {
    try {
      const res = await fetch(process.env.DATA_API_KEY_FE + "/api/blog/brief");
      if (res.ok) {
        const blogs = await res.json();
        setBlogBrief(blogs);
      } else {
        alert("Failed to fetch data at sidebar");
      }
    } catch (error: any) {
      alert("Failed to fetch data at sidebar");
    }
  }

  return (
    <div className="flex z-0 sticky top-6 bottom-4 flex-col justify-center items-center py-10">
      <h2 className="flex w-full h-auto items-center justify-center pt-4 text-xl font-semibold uppercase text-fifth-color ">
        Món ăn nổi bật
      </h2>
      <div className="w-full flex flex-col justify-center items-center gap-10 pt-4">
        {blogBrief.map((blog) => (
          <div key={blog.id} className="px-6">
            <Link href={`/blog/${blog.link}`}>
              <article className="flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-lg shadow-gray-300 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl dark:shadow-black">
                <div className="">
                  <Image
                    className="w-[100%] h-[100%] "
                    objectFit="cover"
                    src={blog.image}
                    alt={blog.link}
                    width={350}
                    height={200}
                  />
                </div>
                <div className="flex flex-col p-2">
                  <h3 className="text-base font-semibold uppercase text-fifth-color">
                    {blog.name}
                  </h3>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
