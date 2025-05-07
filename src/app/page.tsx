import Link from 'next/link';
import * as S from './page.style';
import ToroocExperience from '@/components/home/ToroocExperience';

export default function Home() {
  return (
    <>
      <div className={S.container}>
        <section className={S.heroSection}>
          <div>
            <h1 className={S.title}>프론트엔드 개발자 포트폴리오</h1>
            <p className={S.subtitle}>
              Next.js, TypeScript, Tailwind CSS를 활용한 웹 개발 경험을 소개합니다.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="/about" className={S.button}>
                자기소개
              </Link>
              <Link href="/projects" className={`${S.button} bg-gray-700 hover:bg-gray-800`}>
                프로젝트 보기
              </Link>
            </div>
          </div>
          <div className={S.heroImage}>
            {/* 프로필 이미지 추가 예정 */}
            <div className="w-48 h-48 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-600 dark:text-gray-400">프로필 이미지</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">주요 기술 스택</h2>
          <div className={S.highlightSection}>
            <div className={S.card}>
              <h3 className={S.cardTitle}>Frontend</h3>
              <p className={S.cardContent}>
                React, Next.js, TypeScript, Tailwind CSS, ReactFlow
              </p>
            </div>
            <div className={S.card}>
              <h3 className={S.cardTitle}>Backend</h3>
              <p className={S.cardContent}>
                Node.js, Express, RESTful API
              </p>
            </div>
            <div className={S.card}>
              <h3 className={S.cardTitle}>기타</h3>
              <p className={S.cardContent}>
                Git, GitHub, Figma, Responsive Design
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* 토룩 경험 섹션 추가 */}
      <ToroocExperience />
      
      <div className={S.container}>
        <section className="my-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">포트폴리오 둘러보기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/experience" className={S.card}>
              <h3 className={S.cardTitle}>경력 보기</h3>
              <p className={S.cardContent}>
                토룩에서의 다양한 프로젝트 경험과 성과를 확인해보세요.
              </p>
            </Link>
            
            <Link href="/career-flow" className={S.card}>
              <h3 className={S.cardTitle}>경력 시각화</h3>
              <p className={S.cardContent}>
                프로젝트와 기술 간의 관계를 네트워크 그래프로 시각화했습니다.
              </p>
            </Link>
            
            <Link href="/projects" className={S.card}>
              <h3 className={S.cardTitle}>프로젝트</h3>
              <p className={S.cardContent}>
                개인 및 회사 프로젝트를 소개합니다.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}