import { Metadata } from 'next';
import SkillsClient from './SkillsClient';

export const metadata: Metadata = {
  title: '기술 스택 | 프론트엔드 개발자 포트폴리오',
  description: '프론트엔드 개발자의 기술 스택을 시각화한 페이지입니다.',
};

// 정적 페이지로 완전히 분리
export default function SkillsPage() {
  return <SkillsClient />;
}