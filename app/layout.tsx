import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import React from "react";

export const metadata: Metadata = {
    title: "T-Cooking",
    description: "T-Cooking",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <React.StrictMode>
                <body style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}>
                    <SessionProvider>{children}</SessionProvider>
                </body>
            </React.StrictMode>
        </html>
    );
}
