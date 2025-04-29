'use client';

import { useState } from 'react';
import Link from 'next/link';
import * as S from './page.style';

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '반응형 이커머스 웹사이트',
    description: 'Next.js와 Tailwind CSS를 활용한 현대적인 이커머스 플랫폼 개발. 상품 검색, 장바구니, 결제 시스템 구현.',
    image: '/project1.jpg',
    date: '2023',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://example.com/demo1',
    codeUrl: 'https://github.com/username/ecommerce',
    category: 'frontend'
  },
  {
    id: 2,
    title: '실시간 데이터 대시보드',
    description: 'React와 D3.js를 활용한 실시간 데이터 시각화 대시보드. 커스텀 차트와 필터링 기능 제공.',
    image: '/project2.jpg',
    date: '2022',
    tags: ['React', 'D3.js', 'WebSocket', 'Styled Components'],
    demoUrl: 'https://example.com/demo2',
    codeUrl: 'https://github.com/username/dashboard',
    category: 'data'
  },
  {
    id: 3,
    title: '팀 협업 관리 앱',
    description: 'React와 Express를 활용한 풀스택 팀 프로젝트 관리 애플리케이션. 대용량 파일 업로드 및 공유 기능 구현.',
    image: '/project3.jpg',
    date: '2022',
    tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
    demoUrl: 'https://example.com/demo3',
    codeUrl: 'https://github.com/username/team-collab',
    category: 'fullstack'
  },
  {
    id: 4,
    title: '개인 블로그 플랫폼',
    description: 'Next.js와 Markdown을 활용한 정적 블로그 플랫폼. 코드 하이라이팅과 반응형 디자인 적용.',
    image: '/project4.jpg',
    date: '2021',
    tags: ['Next.js', 'Markdown', 'Vercel', 'SEO'],
    demoUrl: 'https://example.com/demo4',
    codeUrl: 'https://github.com/username/blog',
    category: 'frontend'
  },
  {
    id: 5,
    title: '날씨 정보 API 통합 앱',
    description: '날씨 API를 활용한 위치 기반 날씨 정보 제공 애플리케이션. 주간 예보 및 온도 변화 그래프 구현.',
    image: '/project5.jpg',
    date: '2021',
    tags: ['React', 'API Integration', 'Geolocation', 'Chart.js'],
    demoUrl: 'https://example.com/demo5',
    codeUrl: 'https://github.com/username/weather-app',
    category: 'api'
  },
  {
    id: 6,
    title: '포트폴리오 웹사이트',
    description: 'Next.js, TypeScript, Tailwind CSS를 활용한 개인 포트폴리오 웹사이트. 다크 모드 지원.',
    image: '/project6.jpg',
    date: '2023',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ReactFlow'],
    demoUrl: 'https://example.com/demo6',
    codeUrl: 'https://github.com/username/portfolio',
    category: 'frontend'
  }
];

// 카테고리 필터 데이터
const categories = [
  { id: 'all', name: '전체' },
  { id: 'frontend', name: '프론트엔드' },
  { id: 'fullstack', name: '풀스택' },
  { id: 'data', name: '데이터 시각화' },
  { id: 'api', name: 'API 통합' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 카테고리별 프로젝트 필터링
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div className={S.container}>
      <h1 className={S.title}>프로젝트</h1>
      <p className={S.subtitle}>
        다양한 웹 개발 프로젝트들을 소개합니다. 각 프로젝트는 실제 문제 해결과 기술적 도전을 포함하고 있습니다.
      </p>
      
      {/* 카테고리 필터 */}
      <div className={S.filterSection}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${S.filterButton} ${
              activeCategory === category.id ? S.filterButtonActive : S.filterButtonInactive
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* 프로젝트 그리드 */}
      <div className={S.projectsGrid}>
        {filteredProjects.map(project => (
          <div key={project.id} className={S.projectCard}>
            <div className={S.projectImage}>
              {/* 프로젝트 이미지 대체 */}
              <div className="w-full h-48 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <span className="text-gray-600 dark:text-gray-400">{project.title} 이미지</span>
              </div>
            </div>
            <div className={S.projectContent}>
              <h3 className={S.projectTitle}>{project.title}</h3>
              <p className={S.projectDescription}>{project.description}</p>
              
              <div className={S.projectTags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={S.projectTag}>{tag}</span>
                ))}
              </div>
              
              <div className={S.projectMeta}>
                <span className={S.projectDate}>{project.date}</span>
              </div>
              
              <div className={S.projectLinks}>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={S.projectLink}>
                  <span className={S.projectLinkIcon}>▶️</span> 데모 보기
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={S.projectLink}>
                  <span className={S.projectLinkIcon}>💻</span> 코드 보기
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}