/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_ROOT_BASE || "",
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
