/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
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
