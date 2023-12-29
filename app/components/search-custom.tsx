import { Search } from "react-bootstrap-icons";
import { CustomSearchProps } from "../types";

export default function SearchCustom({
    title,
    handleClick,
}: CustomSearchProps) {
    return (
        <div className="flex items-center">
            <div className="flex px-2 h-7 overflow-auto ">
                <input
                    type="text"
                    placeholder={title}
                    className="flex w-40 outline-none pl-2 rounded-l-md md:w-full text-gray-400 placeholder:text-gray-400"
                />
                <button
                    className="flex bg-white px-2 rounded-r-md"
                    onClick={handleClick}
                >
                    <Search className="flex h-7 w-5 rounded-r-md text-gray-400 " />
                </button>
            </div>
        </div>
    );
}
