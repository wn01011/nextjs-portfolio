'use client';

import { useState, useEffect } from 'react';
import * as S from './page.style';
import { ReactFlowProvider } from 'reactflow';
import dynamic from 'next/dynamic';

// ReactFlow를 동적으로 임포트 (클라이언트 사이드에서만 로드)
const SkillsFlowComponent = dynamic(
  () => import('@/components/flow/SkillsFlow'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[75vh] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">기술 스택 시각화 로딩 중...</p>
      </div>
    )
  }
);

export default function SkillsClient() {
  const [selectedNodeType, setSelectedNodeType] = useState<string>('all');
  const [isBrowser, setIsBrowser] = useState(false);
  const [isError, setIsError] = useState(false);

  // 클라이언트 환경인지 확인
  useEffect(() => {
    setIsBrowser(true);
    
    // ReactFlow 로드 오류 처리
    try {
      // ReactFlow 관련 확인
      if (typeof window !== 'undefined') {
        // 여기서 필요한 경우 추가 로직
      }
    } catch (error) {
      console.error('ReactFlow 로드 오류:', error);
      setIsError(true);
    }
  }, []);

  // 정적 내보내기 또는 오류 시 대체 콘텐츠 표시
  if (!isBrowser || isError) {
    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6 my-8">
        <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
          인터랙티브 요소 로딩 중...
        </h2>
        <p className="text-yellow-700 dark:text-yellow-300 mb-6">
          기술 스택 시각화는 브라우저에서 자바스크립트를 로드한 후에 표시됩니다.
          로딩이 완료되면 인터랙티브한 시각화를 확인하실 수 있습니다.
        </p>

        {/* 정적 기술 스택 대체 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">
            <span className="font-bold">React</span>
            <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full">
              <div className="bg-primary-500 h-2 rounded-full w-full" />
            </div>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">
            <span className="font-bold">Next.js</span>
            <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full">
              <div className="bg-primary-500 h-2 rounded-full w-4/5" />
            </div>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-center">
            <span className="font-bold">TypeScript</span>
            <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full">
              <div className="bg-primary-500 h-2 rounded-full w-4/5" />
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-center">
            <span className="font-bold">Node.js</span>
            <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full">
              <div className="bg-primary-500 h-2 rounded-full w-3/5" />
            </div>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg text-center">
            <span className="font-bold">MongoDB</span>
            <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full">
              <div className="bg-primary-500 h-2 rounded-full w-3/5" />
            </div>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-center">
            <span className="font-bold">Git</span>
            <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full">
              <div className="bg-primary-500 h-2 rounded-full w-4/5" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* 노드 타입 선택기 */}
      <div className={S.nodeTypeSelector}>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'all' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType('all')}
        >
          전체 보기
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'frontend' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType('frontend')}
        >
          프론트엔드
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'backend' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType('backend')}
        >
          백엔드
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'database' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType('database')}
        >
          데이터베이스
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'tool' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType('tool')}
        >
          개발 도구
        </button>
      </div>
      
      {/* 기술 스택 플로우 차트 */}
      <div className={S.flowContainer}>
        <ReactFlowProvider>
          <SkillsFlowComponent selectedNodeType={selectedNodeType} />
        </ReactFlowProvider>
      </div>
      
      {/* 범례 */}
      <div className={S.legendContainer}>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-blue-300 dark:bg-blue-700"></div>
          <span>프론트엔드</span>
        </div>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-green-300 dark:bg-green-700"></div>
          <span>백엔드</span>
        </div>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-yellow-300 dark:bg-yellow-700"></div>
          <span>데이터베이스</span>
        </div>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <span>개발 도구</span>
        </div>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-red-300 dark:bg-red-700"></div>
          <span>핵심 기술</span>
        </div>
      </div>
    </>
  );
}