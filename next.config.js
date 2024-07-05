/** @type {import('next').NextConfig} */
const nextConfig = {
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
        domains: [
            "firebasestorage.googleapis.com",
            "lh3.googleusercontent.com",
        ],
        remotePatterns: [
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
    reactStrictMode: true,
};

module.exports = nextConfig;
