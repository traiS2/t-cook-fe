"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Page() {
    const { data: session } = useSession();
    useEffect(() => {
        getBlogs();
    }, []);

    async function getBlogs() {
        await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    return (
        <p>
            {session?.user.role}
            {session?.user.accessToken}
            hi
        </p>
    );
}
