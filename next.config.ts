import type { NextConfig } from "next";

const path = require("node:path");

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/styles"),
    ],
  },
};

export default nextConfig;
