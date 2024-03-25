import { Search } from "react-bootstrap-icons";
export default function NavBar() {
    return (
        <div className="flex w-full mx-2 flex-row h-[48px] items-center justify-between">
            <div className="flex h-8 overflow-auto">
                <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="flex w-40 outline-none pl-2 rounded-l-md md:w-full"
                />
                <button className="flex bg-white px-2 rounded-r-md">
                    <Search className="w-5 h-8 rounded-r-md text-gray-400"/>
                </button>
            </div>
            <div className="flex "></div>
        </div>
    );
}
