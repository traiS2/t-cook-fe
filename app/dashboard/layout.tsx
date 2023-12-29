import SideNav from "../ui/dashboard/sidenav";
import NavBar from "../ui/dashboard/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col  bg-white md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64 bg-white">
                <SideNav />
            </div>
            <div className="flex-grow md:overflow-y-auto">
                <div className="flex rounded-md mx-3 bg-gray-100 md:mx-0 md:my-2 md:mr-2">
                    <NavBar />
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
