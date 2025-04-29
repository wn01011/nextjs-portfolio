'use client';

import { useState } from 'react';
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
  
  return (
    <div className={S.container}>
      <h1 className={S.title}>기술 스택</h1>
      <p className={S.subtitle}>
        제가 보유한 기술 스택들과 그 관계를 시각적으로 볼 수 있습니다.
        노드를 드래그하여 직접 상호작용해보세요.
      </p>
      
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
    </div>
  );
}