import Link from "next/link";
import NavLinks from "./nav-links";
import Image from "next/image";
import { Power as PowerIcon } from "react-bootstrap-icons";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-2 md:px-2">
            <Link
                className="mb-2 flex h-auto items-start justify-center rounded-md bg-sixth-color "
                href="/dashboard"
            >
                <Image
                    src="/t-cook-logo-d.png"
                    width={500}
                    height={200}
                    alt="logo-d"
                    priority
                    objectFit="cover"
                />
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-primary-color md:block"></div>
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-sm bg-primary-color p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none">
                        <PowerIcon size={18} />
                        <div>Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
