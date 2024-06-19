import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

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
            <body style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
