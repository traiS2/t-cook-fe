import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-2 md:px-2">
            <Link
                className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-300 p-4 md:h-40"
                href="/dashboard"
            >
                T-Cook
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-sm bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none">
                      {/* <PowerIcon className="w-6" />
                        <div>Sign Out</div> */}
                    </button>
                </form>
            </div>
        </div>
    );
}
