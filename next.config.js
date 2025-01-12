/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 开启压缩
  compress: true,
  // 图片优化
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
  // 生产环境优化
  productionBrowserSourceMaps: false,
  swcMinify: true,
}

module.exports = nextConfig 