/** @type {import('next').NextConfig} */

/**
 * - Nếu build chỉ riêng out trên github page thì export và để basePath là tên Repository chứa source out, ví dụ: basePath: "/guest",
 * - Nếu build nguyên source next js lên github hoặc gửi người khác source out để xem thì bỏ basePath
 */
const nextConfig = {
  output: "export",
  basePath: "/guest",
};

export default nextConfig;
