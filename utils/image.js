import nextConfig from "../next.config.mjs";

const { basePath } = nextConfig;

const renderImagePath = (path) => {
  return basePath ? `${basePath}${path}` : path;
};

export { renderImagePath };
