/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimize for production
  poweredByHeader: false,
  // Enable client-side only features
  experimental: {
    optimizePackageImports: ['react-mathquill'],
  },
}

module.exports = nextConfig
