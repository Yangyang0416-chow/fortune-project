/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 开启压缩
  compress: true,
  // 生产环境优化
  productionBrowserSourceMaps: false,
  swcMinify: true,
}

module.exports = nextConfig 