// 이미지 경로에 basePath를 자동으로 붙여주는 유틸 함수
const basePath = process.env.NODE_ENV === 'production' ? '/nextjs-portfolio' : '';
export function getImageSrc(src: string) {
  return `${basePath}${src}`;
}
