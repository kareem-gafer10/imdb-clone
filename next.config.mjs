/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    experimental: {
      appDir: true,
    },
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
