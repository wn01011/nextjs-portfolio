import { Metadata } from 'next';
import SkillsClient from './SkillsClient';

export const metadata: Metadata = {
  title: '기술 스택 | 프론트엔드 개발자 포트폴리오',
  description: '프론트엔드 개발자의 기술 스택을 시각화한 페이지입니다.',
};

// 정적 페이지로 설정 (dynamic 설정 제거)
export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">기술 스택</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        제가 보유한 기술 스택들과 그 관계를 시각화한 페이지입니다.
        노드를 드래그하여 직접 상호작용해보세요.
      </p>
      
      {/* 클라이언트 컴포넌트 - 정적 내보내기에서는 처음 로드 시에만 렌더링됨 */}
      <SkillsClient />
    </div>
  );
}