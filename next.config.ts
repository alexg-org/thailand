import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PORT: '3000'
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
