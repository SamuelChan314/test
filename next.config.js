/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/test', // Replace with your repository name
  assetPrefix: '/test/', // Replace with your repository name
};

module.exports = nextConfig;
