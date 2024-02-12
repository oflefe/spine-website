/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/spine-website",
  assetPrefix: "/spine-website/",
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
};

export default nextConfig;
