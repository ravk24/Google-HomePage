/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
// module.exports = {
//   experimental: {
//     missingSuspenseWithCSRBailout: false,
//   },
// };
export default nextConfig;
