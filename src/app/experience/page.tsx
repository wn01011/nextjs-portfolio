import { Metadata } from 'next';
import ExperienceTimeline from '@/components/experience/ExperienceTimeline';
import ProjectHighlights from '@/components/experience/ProjectHighlights';
import toroocExperience from '@/data/experience';
import * as S from './page.style';

export const metadata: Metadata = {
  title: '경력 | 포트폴리오',
  description: '개발자 경력 및 프로젝트 경험',
};

export default function ExperiencePage() {
  return (
    <main className={S.container}>
      <h1 className={S.title}>직무 경력</h1>
      
      <div className={S.gridLayout}>
        {/* 왼쪽 경력 타임라인 */}
        <div className={S.sidebarColumn}>
          <ExperienceTimeline experience={toroocExperience} />
        </div>
        
        {/* 오른쪽 프로젝트 하이라이트 */}
        <div className={S.mainColumn}>
          <ProjectHighlights projects={toroocExperience.projects} />
        </div>
      </div>
    </main>
  );
}