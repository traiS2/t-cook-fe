"use client";
import Link from "next/link";
import { Search } from "react-bootstrap-icons";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function NavBar() {
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status !== "loading") {
            setIsLoading(false);
        }
    }, [status]);

    return (
        <div className="flex w-full mx-2 flex-row h-[48px] items-center justify-between">
            <div className="flex h-8 overflow-auto">
                <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="flex w-40 outline-none pl-2 rounded-l-md md:w-full"
                />
                <button className="flex bg-white px-2 rounded-r-md">
                    <Search className="w-5 h-8 rounded-r-md text-gray-400" />
                </button>
            </div>
            <div className="flex ">
                {isLoading ? (
                    <div className="flex items-center justify-center gap-2 ">
                        <div className="flex h-10 w-40 border-2 rounded-lg p-1 border-sixth-color animate-pulse">
                            <div className="flex w-7 h-full rounded-full border-sixth-color border-2"></div>
                            <div className="text-sm font-medium"></div>
                        </div>
                    </div>
                ) : !session ? (
                    <div className="flex gap-2">
                        {/* <Link href={"/auth/login"}>
                            <button className="flex h-9 border-2 rounded-md border-white w-full grow items-center justify-center gap-2 bg-primary-color p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none">
                                <div>Login</div>
                            </button>
                        </Link> */}
                    </div>
                ) : (
                    <div className="w-full flex flex-row cursor-pointer">
                        <div className="flex flex-row relative justify-center items-center gap-1 border-2 rounded-lg p-1 border-sixth-color w-full">
                            <div>
                                <Image
                                    className="rounded-full"
                                    src={session?.user.image || ""}
                                    alt="avatar google"
                                    height={28}
                                    width={28}
                                ></Image>
                            </div>
                            <div className="text-sm font-medium">
                                {session?.user.name}
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 "></div>
                    </div>
                )}
                <div className="flex "></div>
            </div>
        </div>
    );
}
