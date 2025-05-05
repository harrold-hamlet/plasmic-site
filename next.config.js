const nextConfig = {
  images: {
    domains: ['studio.plasmic.app'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

module.exports = nextConfig;
