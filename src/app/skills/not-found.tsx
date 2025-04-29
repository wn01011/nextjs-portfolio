'use client';

import Link from 'next/link';

export default function SkillsNotFound() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">기술 스택 시각화</h1>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
          클라이언트 전용 페이지
        </h2>
        <p className="text-yellow-700 dark:text-yellow-300 mb-6">
          기술 스택 시각화 페이지는 인터랙티브 요소가 포함되어 있어 정적 사이트에서는 접근할 수 없습니다.
          완전한 경험을 위해서는 개발 환경에서 확인해주세요.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}