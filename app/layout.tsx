import type { Metadata } from "next";
import "./globals.css";
<script
    src="https://kit.fontawesome.com/915bc6cb74.js"
    crossOrigin="anonymous"
></script>;

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
