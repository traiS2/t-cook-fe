import { FeaturedTags, FeaturedBlogs } from "..";
export default function Footer() {
    return (
        <div className="flex flex-col mx-auto w-full items-center justify-center bg-primary-color">
            <div className="flex justify-between items-start gap-44 w-3/5 m-6">
                <div className=" w-1/2">
                    <FeaturedTags />
                </div>
                <div className="w-1/2">
                    <FeaturedBlogs />
                </div>
            </div>
            <div className="w-full h-8 flex justify-center items-center bg-blue-200">
                <div className="w-3/5 flex items-center justify-between text-gray-500 text-sm">
                    <p className="">© 2024 T-Cook. All Rights Seserved.</p>
                    <p className="">Pow by T-Cook. Designed by TraiNH.</p>
                </div>
            </div>
        </div>
    );
}
