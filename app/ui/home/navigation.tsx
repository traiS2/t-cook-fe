"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { MenuUp } from "react-bootstrap-icons";
import { useState } from "react";

export default function Navigation() {
    const pathname = usePathname();
    const [showNavigation, setShowNavigation] = useState(false);
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
    const handleClickShowNavigation = () => {
        setShowNavigation(!showNavigation);
    };
    return (
        <div className="flex sticky z-10 top-[-2px] items-center justify-center border-y-2 bg-sixth-color/90 ">
            <div className="relative sm:hidden flex w-full justify-start items-center py-0.5 pl-2">
                <div>
                    <MenuUp
                        size={20}
                        onClick={handleClickShowNavigation}
                        className=""
                        color="gray"
                    />
                </div>
                <div className="pl-2 text-second-color text-base font-semibold">
                    {pathname.replace(/\//g, " >> ")}
                </div>
            </div>
            {showNavigation && (
                <div className="absolute sm:hidden bg-primary-color left-1 top-8 px-1">
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.url}
                                className={clsx(
                                    "text__navigation object-cover",
                                    {
                                        "!text-fifth-color underline underline-offset-4":
                                            pathname === link.url,
                                    }
                                )}
                                onClick={handleClickShowNavigation}
                            >
                                <p className="pb-1 text-base font-bold ">
                                    {link.name}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            )}
            <div className="hidden sm:flex flex-wrap mx-auto justify-center items-center gap-2 mt-1 xl:w-3/5 md:gap-4">
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
