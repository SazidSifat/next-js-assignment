/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.freepik.com", "i.ibb.co.com"], // এই hostname allow করতে হবে
  },
};

export default nextConfig;
