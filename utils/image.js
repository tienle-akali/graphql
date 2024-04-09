import nextConfig from "../next.config.mjs";

const renderImagePath = (path) => {
  return `${nextConfig.basePath}${path}`;
};

export { renderImagePath };
