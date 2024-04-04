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
    domains: ["firebasestorage.googleapis.com"],
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
};
