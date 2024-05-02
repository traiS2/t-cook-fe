import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";
export default function ViewMoreButton({ link }: { link: string }) {
    return (
        <Link href={`/blog/${link}`}> 
            <div className="inline-flex text-center font-semibold  py-1 px-3 gap-2 w-auto border-solid text-fifth-color border border-fifth-color rounded-md hover:text-white hover:bg-fifth-color my-4">
                <p className="uppercase text-sm">Xem tiếp</p>
                <ArrowRight className="w-auto h-auto " />
            </div>
        </Link>
    );
}
