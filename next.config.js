/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-portfolio' : '',
  images: {
    unoptimized: true,
  },
  // Skills 페이지에서 ReactFlow 오류가 발생하므로 이 페이지는 정적 생성에서 제외
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // skills 페이지 제외
    const pathMap = { ...defaultPathMap };
    delete pathMap['/skills'];
    
    return pathMap;
  },
}

module.exports = nextConfig