"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();
    const links = [
        {
            name: "blog",
            url: "/home",
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
            name: "món ăn nổi bật",
            url: "",
        },
        {
            name: "chuyên mục",
            url: "",
        },
        {
            name: "giới thiệu",
            url: "",
        },
    ];
    return (
        <div className="flex sticky top-[-2px] items-center justify- border-y-2 bg-second-bg-color">
            <div className="flex flex-wrap mx-auto w-3/5 justify-center items-center gap-4 ">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.url}
                            className={clsx("text__navigation", {
                                "!text-text-color !font-medium underline underline-offset-4":
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

