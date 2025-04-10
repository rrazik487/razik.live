/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true
    },
    output: 'export',  // For GitHub Pages deployment
    distDir: 'out',
  };
  
  module.exports = nextConfig;
  