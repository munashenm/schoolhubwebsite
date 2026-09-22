import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel / Apache hosting
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
