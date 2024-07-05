"use client";
import { signOut } from "next-auth/react";
import Button from "../components/button";
export default function Page() {
    const handleOnClickLogout = async () => {
        signOut({
            redirect: true,
            callbackUrl: "http://localhost:3000/auth/login",
        });
    };

    return (
        <div className="w-full h-[100vh] flex flex-col gap-2 justify-center items-center font-extrabold text-lg">
            You can't access this page
            <div className="flex flex-row gap-2">
                <div>
                    <Button label="Logout" onClick={handleOnClickLogout} />
                </div>
                <div>
                    <Button label="Back" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}
