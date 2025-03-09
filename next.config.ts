import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  serverRuntimeConfig: {
    port: 3001,
  },
};

export default nextConfig;
