import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/beta": ["./node_modules/pg-cloudflare/**/*"],
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
