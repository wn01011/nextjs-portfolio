'use client';

import React, { useState, useEffect } from "react";
import { Project } from "@/data/experience";
import * as S from "./ProjectHighlights.style";

interface ProjectHighlightsProps {
  projects: Project[];
}

const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const categories = [
    "all",
    "개발",
    "데브옵스",
    "인프라",
    "최적화",
    "유지보수",
  ];

  // 선택된 카테고리에 따라 프로젝트 필터링
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    function scrollToHash() {
      if (window.location.hash) {
        const id = decodeURIComponent(window.location.hash.replace("#", ""));
        setTimeout(() => {
          const el = document.getElementById(id);
          console.log(el, id);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 200);
      }
    }
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className={S.card}>
      <h2 className={S.sectionTitle}>프로젝트 상세</h2>

      {/* 카테고리 필터 */}
      <div className={S.tabContainer}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? S.activeTabButton
                : S.inactiveTabButton
            }
          >
            {category === "all" ? "전체" : category}
          </button>
        ))}
      </div>

      {/* 프로젝트 목록 */}
      <div className={S.projectListContainer}>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            id={project.title.replace(/\s+/g, "-").toLowerCase()}
            className={S.projectItem}
          >
            <div className={S.projectHeader}>
              <h3 className={S.projectTitle}>{project.title}</h3>
              <span className={S.projectPeriod}>{project.period}</span>
            </div>

            <p className={S.projectDescription}>{project.description}</p>

            <div className={S.techTagsContainer}>
              <h4 className={S.subsectionTitle}>사용 기술</h4>
              <div className={S.techTagsContainer}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={S.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className={S.subsectionTitle}>주요 성과</h4>
              <ul className={S.highlightsList}>
                {project.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlights;