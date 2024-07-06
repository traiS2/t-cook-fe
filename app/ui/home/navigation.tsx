"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { MenuUp } from "react-bootstrap-icons";

export default function Navigation() {
    const pathname = usePathname();
    console.log(pathname)
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
        <div className="flex sticky z-10 top-[-2px] items-center justify-center border-y-2 bg-sixth-color/90 ">
            <div className="flex w-full justify-start items-center py-1 pl-2">
                <div>
                    <MenuUp size={20} className="" color="gray" />
                </div>
                <div className="pl-2 text-second-color text-sm font-semibold">
                    {pathname}
                </div>
            </div>
            <div className="hidden flex-wrap mx-auto justify-center items-center gap-2 mt-1 xl:w-3/5 md:gap-4">
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
                            <p className="pb-1 text-base font-bold ">
                                {link.name}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
