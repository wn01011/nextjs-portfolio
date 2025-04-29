/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-portfolio' : '',
  images: {
    unoptimized: true,
  },
  // App Router와 호환되는 방식으로 설정
  distDir: 'out',
  trailingSlash: true,
}

module.exports = nextConfig