import Image from "next/image";
import ViewMoreButton from "./view-more-button";
import Link from "next/link";
import { format } from "date-fns";
import { ta, vi } from "date-fns/locale";
export default function Blog({
    id,
    title,
    link,
    image,
    createAt,
    introduction,
    tag,
    user,
}: BlogSummary) {
    const introductionCustom =
        introduction
            .map((introduction) => {
                return introduction.content;
            })
            .join(" ")
            .split(" ")
            .slice(0, 60)
            .join(" ") + " [...]";
    const formattedDate = format(createAt, "PP", { locale: vi });
    return (
        <div className="w-full h-auto border-b border-second-color my-8 ">
            <Link href={`/blog/${link}`}>
                <h1 className="text-xl font-semibold uppercase text-fifth-color">
                    {title}
                </h1>
            </Link>
            <p className="text-xs font-bold text-second-color">
                Đăng vào{" "}
                <span className="font-semibold text-fifth-color">
                    {formattedDate}
                </span>{" "}
                {/* | trong{" "} */}
                {/* <span className="font-normal text-fifth-color">{category}</span>{" "} */}
                bởi{" "}
                <span className="font-semibold text-fifth-color">
                    {user.name}
                </span>
            </p>
            <Image
                className="object-cover w-full my-4 rounded-xl"
                alt="image food"
                height={100}
                width={600}
                src={image}
            />
            <p className=" text-justify text-fourth-color">
                {introductionCustom}
            </p>
            <p className="text-sm mt-4 text-fifth-color italic">
                Tags:{" "}
                <span className="font-normal">
                    {tag
                        .map((tag) => {
                            return tag.name;
                        })
                        .join(", ")}
                </span>
            </p>
            <ViewMoreButton link={link} />
        </div>
    );
}
