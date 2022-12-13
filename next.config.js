/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [process.env.BASE_URL],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mic.t-solution.vn",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "mic.t-solution.vn",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
