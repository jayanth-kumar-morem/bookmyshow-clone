/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/common", "@repo/state"],
};

module.exports = nextConfig;
