"use client";
import { BlogList } from "@/app/ui";
import { Suspense } from "react";
export default function Page({ params }: { params: { position: string } }) {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <BlogList position={parseInt(params.position)} />
            </Suspense>
        </div>
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}
