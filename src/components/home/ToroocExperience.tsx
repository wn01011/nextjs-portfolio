import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import toroocExperience from '@/data/experience';
import * as S from './ToroocExperience.style';

const ToroocExperience = () => {
  // 주요 프로젝트 4개만 선택
  const highlightProjects = toroocExperience.projects.filter(project => 
    ['로봇 콘텐츠 빌더툴 개발', '로봇 콘텐츠 사이트 개발 및 유지보수', 'RDS 쿼리 최적화', '도메인 체계 정리'].includes(project.title)
  );
  
  // 사용 기술 중복 제거하여 통합
  const allTechnologies = new Set<string>();
  toroocExperience.projects.forEach(project => {
    project.technologies.forEach(tech => allTechnologies.add(tech));
  });
  
  return (
    <section className={S.sectionContainer}>
      <div className={S.innerContainer}>
        <h2 className={S.sectionTitle}>토룩 근무 경험</h2>
        <p className={S.periodText}>{toroocExperience.period}</p>
        
        <div className={S.gridLayout}>
          <div>
            <h3 className={S.subtitle}>회사 소개</h3>
            <p className={S.description}>
              토룩은 교육용 로봇 및 콘텐츠 플랫폼을 개발하는 회사로, 로봇과 상호작용하는 
              교육 콘텐츠를 제작하고 배포하는 시스템을 운영하고 있습니다.
            </p>
            <h3 className={S.subtitle}>담당 업무</h3>
            <p className={S.description}>
              {toroocExperience.description}
            </p>
          </div>
          
          <div>
            <h3 className={S.subtitle}>주요 성과</h3>
            <ul className={S.list}>
              <li>콘텐츠 제작을 위한 새로운 빌더툴 개발로 다양한 콘텐츠 제작 가능</li>
              <li>DB 쿼리 최적화로 콘텐츠 로딩 속도 40% 개선</li>
              <li>관리자 페이지 개발로 개발자 개입 없이 계정 및 로봇 관리 가능하게 함</li>
              <li>도메인 체계 정리 및 SSL 인증서 통합으로 보안 강화</li>
              <li>백엔드 성능 테스트 환경 구축 및 최적화 진행</li>
            </ul>
          </div>
        </div>
        
        {/* 주요 기술 */}
        <div className={S.techSectionContainer}>
          <h3 className={S.techSectionTitle}>사용 기술</h3>
          <div className={S.techTagsContainer}>
            {Array.from(allTechnologies).map((tech, index) => (
              <span key={index} className={S.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* 주요 프로젝트 */}
        <h3 className={S.projectSectionTitle}>주요 프로젝트</h3>
        <div className={S.projectGrid}>
          {highlightProjects.map((project, index) => (
            <div key={index} className={S.projectCard}>
              <h4 className={S.projectTitle}>{project.title}</h4>
              <p className={S.projectPeriod}>{project.period}</p>
              <p className={S.projectDescription}>{project.description}</p>
              <div className={S.projectTechContainer}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={S.projectTechTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* 더 보기 링크 */}
        <div className={S.linkContainer}>
          <Link href="/experience" className={S.link}>
            경력 상세 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToroocExperience;