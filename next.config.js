/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Make sure images are handled correctly for static export
    images: {
      unoptimized: true,
    },
    // Ensure trailing slashes for cleaner URLs
    trailingSlash: true,
  };
  
  module.exports = nextConfig;