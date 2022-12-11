/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: false,
   },
   images: {
      domains: ['cdn.sanity.io'],
      loader: 'custom',
   }
};

module.exports = nextConfig;
