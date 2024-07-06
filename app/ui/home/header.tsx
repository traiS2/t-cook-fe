"use client";
import { SocialLink } from "..";
import { SearchCustom } from "@/app/components";

export default function Header() {
    const handleSearchClick = () => {};
    return (
        <div className="flex items-center justify-center bg-primary-color">
            <div className="flex h-9 mx-auto w-full justify-between items-center px-2 xl:w-3/5">
                <div className="flex gap-2 text-second-color">
                    <SocialLink />
                </div>
                <div className="flex items-center">
                    <SearchCustom
                        title="Tìm kiếm"
                        handleClick={handleSearchClick}
                    />
                </div>
            </div>
        </div>
    );
}
