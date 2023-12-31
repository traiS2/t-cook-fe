/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home/blog",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "www.savourydays.com",
                port: "",
                pathname: "/wp-content/uploads/**",
            },
        ],
    },
};
