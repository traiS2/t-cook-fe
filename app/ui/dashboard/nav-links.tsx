"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { HouseHeart, Book, Bookmark } from "react-bootstrap-icons";

export default function NavLinks() {
    const pathname = usePathname();
    const links = [
        { name: "Home", href: "/dashboard", icon: HouseHeart },
        {
            name: "Blog",
            href: "/dashboard/blog",
            icon: Book,
        },
        { name: "Category", href: "/dashboard/category", icon: Bookmark },
        { name: "Admin", href: "/dashboard/admin", icon: Bookmark },
        { name: "Moderator", href: "/dashboard/moderator", icon: Bookmark },
    ];
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-color hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "bg-sky-100 text-blue-600":
                                    pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
