import Image from "next/image";
import { ArrowRight } from "react-bootstrap-icons";
import ViewMoreButton from "./view-more-button";
import { Blog } from "@/app/types";
import Link from "next/link";
export default function Blog({
    id,
    link,
    title,
    date,
    category,
    image,
    user,
    description,
}: Blog) {
    return (
        <div className="w-full h-auto border-b border-second-color my-8 ">
            <Link href={`/blog/${link}`}>
                <h1 className="text-2xl font-semibold uppercase text-fifth-color mt-2 mb-1">
                    {title}
                </h1>
            </Link>
            <p className="text-xs font-bold my-1 text-second-color">
                Đăng vào{" "}
                <span className="font-normal text-fifth-color">{date}</span> |
                trong{" "}
                <span className="font-normal text-fifth-color">{category}</span>{" "}
                bới <span className="font-normal text-fifth-color">{user}</span>
            </p>
            <Image
                className="object-cover w-full my-4"
                alt="image food"
                height={100}
                width={600}
                src={image}
            />
            <p className=" text-justify text-fourth-color">{description}</p>
            <p className="text-sm mt-4 text-fifth-color italic">
                Tags: <span className="font-normal">bánh cheesecake</span>,
            </p>
            <ViewMoreButton link={link} />
        </div>
    );
}
