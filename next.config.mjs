/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_ROOT_BASE || "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: process.env.NEXT_PUBLIC_ROOT_BASE || "",
};

export default nextConfig;
