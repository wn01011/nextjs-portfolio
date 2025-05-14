"use client";

import React, { useState, useEffect } from "react";
import { WorkExperience, Project } from "@/data/experience";
import { Education } from "@/data/education";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationTimeline from "./EducationTimeline";
import ProjectHighlights from "./ProjectHighlights";
import * as S from "./ExperienceTabs.style";

interface ExperienceTabsProps {
  workExperience: WorkExperience;
  educationData: Education[];
  projects: Project[];
}

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({
  workExperience,
  educationData,
  projects,
}) => {
  const [activeTab, setActiveTab] = useState<"work" | "education" | "projects">(
    "work"
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setActiveTab("projects");
    }
  }, []);

  return (
    <div className={S.tabsContainer}>
      {/* 탭 버튼 */}
      <div className={S.tabsButtonGroup}>
        <button
          className={
            activeTab === "work" ? S.activeTabButton : S.inactiveTabButton
          }
          onClick={() => setActiveTab("work")}
        >
          직무 경력
        </button>
        <button
          className={
            activeTab === "education" ? S.activeTabButton : S.inactiveTabButton
          }
          onClick={() => setActiveTab("education")}
        >
          교육
        </button>
        <button
          className={
            activeTab === "projects" ? S.activeTabButton : S.inactiveTabButton
          }
          onClick={() => setActiveTab("projects")}
        >
          토룩 프로젝트
        </button>
      </div>

      {/* 직무 경력 탭 패널 */}
      {activeTab === "work" && (
        <div className={S.tabPanelContainer}>
          <div className={S.tabPanelLeftColumn}>
            <ExperienceTimeline experience={workExperience} />
          </div>
          <div className={S.tabPanelRightColumn}>
            <ProjectHighlights projects={projects.slice(0, 3)} />
            <div className="mt-4 text-center">
              <button
                onClick={() => setActiveTab("projects")}
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                모든 프로젝트 보기 →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 교육 경력 탭 패널 */}
      {activeTab === "education" && (
        <div>
          {/* 교육 카드 그리드 (현대적 디자인) */}
          <div className={S.educationGrid}>
            {educationData.map((education, index) => (
              <div key={index} className={S.educationCard}>
                <div className={S.educationInstitution}>
                  {education.institution}
                </div>
                <h3 className={S.educationTitle}>{education.course}</h3>
                <div className={S.educationPeriod}>{education.period}</div>

                {education.description && (
                  <p className={S.educationDescription}>
                    {education.description}
                  </p>
                )}

                {education.skills.length > 0 && (
                  <div className={S.skillsContainer}>
                    {education.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={S.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {education.highlights && education.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                    {education.highlights
                      .slice(0, 3)
                      .map((highlight, hlIndex) => (
                        <li key={hlIndex}>{highlight}</li>
                      ))}
                    {education.highlights &&
                      education.highlights.length > 3 && (
                        <li className="text-primary-600 dark:text-primary-400">
                          + {education.highlights.length - 3}개 더...
                        </li>
                      )}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* 기존 타임라인 스타일 */}
          <div className="mt-8">
            <EducationTimeline educations={educationData} showTitle={false} />
          </div>
        </div>
      )}

      {/* 프로젝트 탭 패널 */}
      {activeTab === "projects" && (
        <div className={S.singleColumnPanel}>
          <ProjectHighlights projects={projects} />
        </div>
      )}
    </div>
  );
};

export default ExperienceTabs;
