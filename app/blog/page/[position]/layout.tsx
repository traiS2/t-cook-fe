"use client";
import { Header, LogoHeader, Navigation, Sidebar, Footer } from "../../../ui";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            {/* <Header />
            <LogoHeader />
            <Navigation /> */}
            <div className="w-full h-auto">
                <div className="flex mx-auto px-2 min-h-screen justify-center">
                    <div className="w-[100%] ">{children}</div>
                    {/* <div className="xl:w-[45%] hidden lg:block">
                        <Sidebar />
                    </div> */}
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}
