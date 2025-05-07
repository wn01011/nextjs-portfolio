'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import toroocExperience from '@/data/experience';
import * as S from './page.style';

// ReactFlow는 클라이언트 사이드에서만 렌더링 되어야 하므로 dynamic import 사용
const CareerFlow = dynamic(
  () => import('@/components/experience/CareerFlow'),
  { ssr: false }
);

export default function CareerFlowPage() {
  return (
    <main className={S.container}>
      <h1 className={S.title}>경력 시각화</h1>
      <p className={S.description}>
        토룩에서 진행한 프로젝트와 사용 기술 간의 관계를 시각화한 네트워크 그래프입니다.
        카테고리별로 필터링이 가능하며, 노드를 드래그하여 위치를 조정할 수 있습니다.
      </p>
      
      <div className={S.flowContainer}>
        <CareerFlow experience={toroocExperience} />
      </div>
      
      <div className={S.guideSection}>
        <h2 className={S.guideTitle}>시각화 가이드</h2>
        <ul className={S.guideList}>
          <li><strong>가운데 노드</strong>: 회사 정보</li>
          <li><strong>중간 계층 노드</strong>: 프로젝트 (색상은 카테고리 구분)</li>
          <li><strong>바깥 계층 노드</strong>: 사용 기술</li>
          <li>줌인/줌아웃하여 상세 정보를 확인할 수 있습니다.</li>
          <li>우측 상단의 버튼으로 카테고리별 필터링이 가능합니다.</li>
          <li>오른쪽 하단의 미니맵으로 전체 구조를 파악할 수 있습니다.</li>
        </ul>
      </div>
    </main>
  );
}