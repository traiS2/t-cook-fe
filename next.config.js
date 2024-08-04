/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*", // Set your origin
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "Content-Type, Authorization",
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/blog",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "www.savourydays.com",
                port: "",
                pathname: "/wp-content/uploads/**",
            },
        ],
    },
    env: {
        DATA_API_KEY_BE: process.env.DATA_API_KEY_BE,
        DATA_API_KEY_FE: process.env.DATA_API_KEY_FE,
    },
};
