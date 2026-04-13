import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /** Avoid picking a parent folder lockfile as the tracing root on Windows/OneDrive setups. */
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
