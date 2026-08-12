import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  // Where the site is mounted. Next prefixes every route, asset and
  // next/image URL with this, so links stay written as "/" and "/work/<slug>".
  //   default          -> madisonyocum.com/code
  //   BASE_PATH=""     -> served at a domain root, e.g. code.madisonyocum.com
  basePath: process.env.BASE_PATH ?? "/code",

  // The index used to live at /work. Keep old links working.
  async redirects() {
    return [{ source: "/work", destination: "/", permanent: true }];
  },
};

export default nextConfig;
