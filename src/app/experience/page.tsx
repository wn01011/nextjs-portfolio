import { Metadata } from 'next';

import toroocExperience from '@/data/experience';
import educationData from '@/data/education';
import * as S from './page.style';
import ExperienceTabs from '@/components/experience/ExperienceTabs';

export const metadata: Metadata = {
  title: '경력 | 포트폴리오',
  description: '개발자 경력 및 프로젝트 경험',
};

export default function ExperiencePage() {
  // 최신순으로 프로젝트 정렬
  const sortedProjects = [...toroocExperience.projects].sort((a, b) => {
    // 프로젝트 기간에서 시작 년도를 추출
    const getYear = (period: string) => {
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };

    const getMonth = (period: string) => {
      const match = period.match(/(\d{1,2})\.(\d{1,2})/);
      return match ? parseInt(match[2]) : 0;
    };

    const yearA = getYear(a.period);
    const yearB = getYear(b.period);

    if (yearB !== yearA) {
      return yearB - yearA;  // 더 최신 년도가 앞으로
    }

    // 년도가 같으면 월 비교
    return getMonth(b.period) - getMonth(a.period);
  });

  const sortedExperience = {
    ...toroocExperience,
    projects: sortedProjects
  };

  return (
    <main className={S.container}>
      <h1 className={S.title}>경력</h1>

      <div className={S.gridLayout}>
        {/* 왼쪽 카테고리 킭 */}
        <div className="col-span-12 mb-8">
          <ExperienceTabs 
            workExperience={sortedExperience} 
            educationData={educationData} 
            projects={sortedProjects} 
          />
        </div>
      </div>
    </main>
  );
}