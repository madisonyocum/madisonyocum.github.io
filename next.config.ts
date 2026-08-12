import type { NextConfig } from "next";

/**
 *   default      -> /code, i.e. a repo named "code" on GitHub Pages
 *   BASE_PATH="" -> served at a domain root
 */
const basePath = process.env.BASE_PATH ?? "/code";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  basePath,

  // Same value, readable from components via lib/asset.ts. Needed because
  // basePath is not exposed to client code.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },

  // Built as a folder of static files, which is all GitHub Pages serves.
  output: "export",

  // Emits work/<slug>/index.html rather than work/<slug>.html, which is what
  // a plain static file server can resolve.
  trailingSlash: true,

  images: {
    // No server, so no on-demand optimisation. Sizes are already right for
    // where each image is used - see public/images/README.md.
    unoptimized: true,
  },
};

export default nextConfig;
