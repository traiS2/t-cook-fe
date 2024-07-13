import { FeaturedTags, FeaturedBlogs } from "..";
export default function Footer() {
    return (
        <div className="flex flex-col mx-auto w-full items-center justify-center bg-primary-color">
            <div className="flex justify-between items-start m-1 sm:m-6 lg:gap-10 lg:w-3/5">
                <div className="w-1/3 lg:w-1/3">
                    <FeaturedTags />
                </div>
                <div className="w-2/3 lg:w-2/3">
                    <FeaturedBlogs />
                </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center bg-blue-200">
                <div className="flex items-center justify-between gap-2 text-gray-500 text-[12px] lg:text-sm md:w-3/5">
                    <p className="">© 2024 T-Cook. All Rights Seserved.</p>
                    <p className="">Pow by T-Cook. Designed by TraiNH.</p>
                </div>
            </div>
        </div>
    );
}
