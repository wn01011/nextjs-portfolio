/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-portfolio' : '',
  images: {
    unoptimized: true,
  },
  // GitHub Pages에 맞게 출력 디렉토리 설정
  distDir: 'docs',
  trailingSlash: true,
}

module.exports = nextConfig