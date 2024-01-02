import { Header, LogoHeader, Navigation, Sidebar, Footer } from "../ui";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Header />
            <LogoHeader />
            <Navigation />
            <div className="w-full h-auto">
                <div className="flex mx-auto w-full justify-center md:w-3/5">
                    <div className="w-4/6 mr-4">{children}</div>
                    {/* <div className="w-2/6">
                        <Sidebar />
                    </div> */}
                </div>
                <Footer />
            </div>
        </div>
    );
}
