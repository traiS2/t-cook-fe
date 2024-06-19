"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    const [username, setUsename] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChangeAccount = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsename(event.target.value);
    };

    const handleOnChangePassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleOnClickLogin = async () => {
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        switch (response.status) {
            case 200:
                router.push("/dashboard");
                break;
            case 401:
                alert(response.body);
                break;
            case 500:
                alert("Lỗi hệ thống");
                break;
        }
    };

    return (
        <div className="flex flex-col items-center justify-start gap-10 rounded-2xl p-4 w-[28%] h-[60%] bg-primary-color">
            <p className="font-bold text-4xl">Wellcome to T-Cook</p>
            <div className="flex flex-col w-full gap-4 justify-center items-center">
                <div className="flex w-full px-20 h-10 overflow-auto ">
                    <input
                        type="text"
                        placeholder="Tài khoản"
                        name="account"
                        className="flex text-lg outline-none pl-2 rounded-lg md:w-full text-gray-400 placeholder:text-gray-400"
                        onChange={handleOnChangeAccount}
                    />
                </div>
                <div className="flex w-full px-20 h-10 overflow-auto ">
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="psssword"
                        className="flex text-lg w-full outline-none pl-2 rounded-lg md:w-full text-gray-400 placeholder:text-gray-400"
                        onChange={handleOnChangePassword}
                    />
                </div>
            </div>
            <button
                id="createProductButton"
                className="inline-flex px-4 py-1 items-center justify-center text-lg font-medium text-center text-fourth-color bg-blue-200 rounded-lg bg-primary-700 hover:bg-blue-300 hover:text-white sm:w-auto "
                type="button"
                onClick={handleOnClickLogin}
            >
                Login
            </button>
            <button
                id="createProductButton"
                className="inline-flex px-4 py-1 items-center justify-center text-lg font-medium text-center text-fourth-color bg-blue-200 rounded-lg bg-primary-700 hover:bg-blue-300 hover:text-white sm:w-auto "
                type="button"
                onClick={() => signIn("google")}
            >
                Sign in with Google
            </button>
        </div>
    );
}
