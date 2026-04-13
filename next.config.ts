import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /** Avoid picking a parent folder lockfile as the tracing root on Windows/OneDrive setups. */
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
