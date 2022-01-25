const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = withPlugins(
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
      },
    },
  ],
  nextConfig
);
