"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();
    const links = [
        {
            name: "blog",
            url: "/home/blog",
        },
        {
            name: "danh mục công thức",
            url: "/home/category",
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
        <div className="flex sticky top-[-2px] items-center justify- border-y-2 bg-sixth-color/90 ">
            <div className="flex flex-wrap mx-auto w-3/5 justify-center items-center gap-4 mt-1 ">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.url}
                            className={clsx("text__navigation", {
                                "!text-fifth-color !font-medium underline underline-offset-4":
                                    pathname === link.url,
                            })}
                        >
                            <p className="pb-1 ">{link.name}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
