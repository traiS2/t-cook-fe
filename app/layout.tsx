import type { Metadata } from "next";
import "./globals.css";

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
                {children}
            </body>
        </html>
    );
}
