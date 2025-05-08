'use client';

import { useState, useEffect } from 'react';
import * as S from "./SkillsClient.style";
import { ReactFlowProvider } from "reactflow";
import dynamic from "next/dynamic";

// ReactFlow를 동적으로 임포트 (클라이언트 사이드에서만 로드)
const SkillsFlowComponent = dynamic(
  () => import("@/components/flow/SkillsFlow"),
  {
    ssr: false,
    loading: () => (
      <div className={S.flowContainer + " flex items-center justify-center"}>
        <p className="text-gray-500 dark:text-gray-400">
          기술 스택 시각화 로딩 중...
        </p>
      </div>
    ),
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
      <div className={S.staticStackWrap}>
        <h2 className={S.staticStackTitle}>인터랙티브 요소 로딩 중...</h2>
        <p className={S.staticStackDesc}>
          기술 스택 시각화는 브라우저에서 자바스크립트를 로드한 후에 표시됩니다.
          <br />
          로딩이 완료되면 인터랙티브한 시각화를 확인하실 수 있습니다.
        </p>
        <div className={S.staticStackGrid}>
          <div
            className={S.staticStackCard + " bg-blue-100 dark:bg-blue-900/30"}
          >
            <span className={S.staticStackCardTitle}>React</span>
            <div className={S.staticStackBarBg}>
              <div className={S.staticStackBar + " w-full"} />
            </div>
          </div>
          <div
            className={S.staticStackCard + " bg-blue-100 dark:bg-blue-900/30"}
          >
            <span className={S.staticStackCardTitle}>Next.js</span>
            <div className={S.staticStackBarBg}>
              <div className={S.staticStackBar + " w-4/5"} />
            </div>
          </div>
          <div
            className={S.staticStackCard + " bg-blue-100 dark:bg-blue-900/30"}
          >
            <span className={S.staticStackCardTitle}>TypeScript</span>
            <div className={S.staticStackBarBg}>
              <div className={S.staticStackBar + " w-4/5"} />
            </div>
          </div>
          <div
            className={S.staticStackCard + " bg-green-100 dark:bg-green-900/30"}
          >
            <span className={S.staticStackCardTitle}>Node.js</span>
            <div className={S.staticStackBarBg}>
              <div className={S.staticStackBar + " w-3/5"} />
            </div>
          </div>
          <div
            className={
              S.staticStackCard + " bg-yellow-100 dark:bg-yellow-900/30"
            }
          >
            <span className={S.staticStackCardTitle}>MongoDB</span>
            <div className={S.staticStackBarBg}>
              <div className={S.staticStackBar + " w-3/5"} />
            </div>
          </div>
          <div
            className={
              S.staticStackCard + " bg-purple-100 dark:bg-purple-900/30"
            }
          >
            <span className={S.staticStackCardTitle}>Git</span>
            <div className={S.staticStackBarBg}>
              <div className={S.staticStackBar + " w-4/5"} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={S.container}>
      {/* 노드 타입 선택기 */}
      <div className={S.nodeTypeSelector}>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === "all"
              ? S.nodeSelectorButtonActive
              : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType("all")}
        >
          전체 보기
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === "frontend"
              ? S.nodeSelectorButtonActive
              : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType("frontend")}
        >
          프론트엔드
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === "backend"
              ? S.nodeSelectorButtonActive
              : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType("backend")}
        >
          백엔드
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === "database"
              ? S.nodeSelectorButtonActive
              : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType("database")}
        >
          데이터베이스
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === "tool"
              ? S.nodeSelectorButtonActive
              : S.nodeSelectorButtonInactive
          }`}
          onClick={() => setSelectedNodeType("tool")}
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