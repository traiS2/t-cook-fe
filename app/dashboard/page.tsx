"use client";
import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        getBlogs();
    }, []);

    async function getBlogs() {
        await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    return <p>Dashboard Page</p>;
}
