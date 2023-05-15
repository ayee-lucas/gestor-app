/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },
};

module.exports = nextConfig;
