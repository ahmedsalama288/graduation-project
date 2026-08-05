/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp", "image/avif"],
    qualities: [30, 60, 70, 80, 85, 90, 100],
  },
};

export default nextConfig;
