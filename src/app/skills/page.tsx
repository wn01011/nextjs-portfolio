import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SkillsClient from './SkillsClient';

export const metadata: Metadata = {
  title: '기술 스택 | 프론트엔드 개발자 포트폴리오',
  description: '프론트엔드 개발자의 기술 스택을 시각화한 페이지입니다.',
};

// 정적 내보내기에서 이 페이지를 처리하기 위한 플래그
export const dynamic = 'force-dynamic';
export const generateStaticParams = () => [];

// 서버 측 확인
export default function SkillsPage() {
  // 정적 내보내기 중에는 notFound()로 리다이렉트
  if (process.env.NEXT_PHASE === 'phase-export') {
    notFound();
  }
  
  // 개발 환경이나 일반 서버 측 렌더링에서는 클라이언트 컴포넌트 렌더링
  return <SkillsClient />;
}