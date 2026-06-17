import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@cline/sdk",
    "@cline/core",
    "@cline/agents",
    "@cline/llms",
    "@cline/shared",
    "@prisma/client",
    "prisma",
  ],
  outputFileTracingIncludes: {
    "/*": ["./lib/generated/prisma/**/*"],
    "/api/**/*": ["./lib/generated/prisma/**/*"],
  },
};

export default nextConfig;