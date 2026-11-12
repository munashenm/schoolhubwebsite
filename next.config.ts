import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel / Apache hosting
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Lets the unmatched-route page set its own title instead of the homepage title.
    globalNotFound: true,
  },
};

export default nextConfig;
