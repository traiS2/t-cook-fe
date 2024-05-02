"use client";
import { BlogList } from "@/app/ui";
import { Suspense } from "react";
export default function Page() {
    return (
        <div>
            <BlogList />
        </div>
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
