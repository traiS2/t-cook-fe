import { IconButtonCustomProps } from "../types";
import Link from "next/link";
export default function IconButtonCustom({
    title,
    icon,
    style,
    handleClick,
}: IconButtonCustomProps) {
    const Icon = icon;
    return (
        <Link href={"/dashboard/blog/create"}>
            <button
                id="createProductButton"
                className="inline-flex  items-center justify-center pr-3 pl-1 py-2 text-sm font-medium text-center text-fourth-color bg-blue-200 rounded-lg bg-primary-700 hover:bg-blue-300 hover:text-white sm:w-auto "
                type="button"
            >
                <Icon className="h-auto" />
                Add product
            </button>
        </Link>
    );
}
