"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const links = [
    {
      name: "blog",
      url: "/blog",
    },
    {
      name: "danh mục công thức",
      url: "/blog/category",
    },
    {
      name: "cùng học làm bánh",
      url: "",
    },
    {
      name: "giới thiệu",
      url: "",
    },
  ];
  return (
    <div className="flex sticky  z-10 top-[-2px] items-center justify-center border-y-2 bg-sixth-color/90 ">
      <div className="flex flex-wrap mx-auto w-3/5 justify-center items-center gap-4 mt-1 ">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.url}
              className={clsx("text__navigation object-cover", {
                "!text-fifth-color underline underline-offset-4":
                  pathname === link.url,
              })}
            >
              <p className="pb-1 text-lg font-bold">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
