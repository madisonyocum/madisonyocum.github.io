import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  // Served from madisonyocum.com/code. Next prefixes every route, asset and
  // next/image URL with this, so links stay written as "/" and "/work/<slug>".
  basePath: "/code",

  // The index used to live at /work. Keep old links working.
  async redirects() {
    return [{ source: "/work", destination: "/", permanent: true }];
  },
};

export default nextConfig;
