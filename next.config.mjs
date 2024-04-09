/** @type {import('next').NextConfig} */
const isProd = true;
const isBasePath = false;

const nextConfig = {
  output: isProd === true ? "export" : undefined,
  basePath: isBasePath === true ? "/out" : "",
  //   assetPrefix: "/out",
};

export default nextConfig;
