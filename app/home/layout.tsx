import { Header, LogoHeader, Navigation, Sidebar } from "../ui";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Header />
            <LogoHeader />
            <Navigation />
            <div className="w-full h-auto bg-second-bg-color">
                <div className="flex mx-auto w-full justify-center md:w-3/5">
                    <div className="w-3/4">{children}</div>
                    <div className="w-1/4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
