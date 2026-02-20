/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**",
            },
        ],
        // ✅ allow local/private IPs for development
        dangerouslyAllowSVG: true,
        unoptimized: process.env.NODE_ENV === "development",
    },
};

export default nextConfig;