import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'localhost'],
    unoptimized: true
  }
};

export default nextConfig;
