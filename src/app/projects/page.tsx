'use client';

import { useState } from "react";
import * as S from "./page.style";
import Image from "next/image";
import { getImageSrc } from "@/utils/getImageSrc";

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: "개인 소개 사이트",
    description:
      "MCP, Next.js, TypeScript, Tailwind CSS를 활용한 개인 소개 사이트.",
    image: "/viewer.png",
    date: "2025.05",
    tags: ["MCP", "Next.js", "TypeScript", "Tailwind CSS", "ReactFlow"],
    codeUrl: "https://github.com/wn01011/nextjs-portfolio",
    category: "frontend",
  },
  {
    id: 3,
    title: "NFTrio",
    description:
      "NFT 거래소와 거래되는 캐릭터를 사용하는 전략형 게임을 제공하는 사이트. Solidity를 이용한 토큰 및 NFT 제작, 스테이징 클리어 게임 개발 등 구현.",
    image: "/NFTrio.png",
    date: "2023.03",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "JavaScript",
      "Solidity",
      "Node.js",
      "MySQL",
      "AWS S3",
      "NFT",
    ],
    codeUrl: "https://github.com/Nyes98/NFTrio",
    category: "fullstack",
  },
  {
    id: 4,
    title: "포트폴리오 사이트 제작",
    description:
      "AWS EC2 하나의 인스턴스에서 여러 프로젝트를 다른포트로 포워딩하고 iframe을 활용한 프로젝트 노출 방식 적용.",
    image: "/mysite.mov",
    date: "2023.03",
    tags: ["React", "Redux", "AWS EC2", "Node.js", "styled-components"],
    codeUrl: "https://github.com/wn01011/MySite",
    liveUrl: "http://noohni.com",
    category: "frontend",
  },
  {
    id: 5,
    title: "Block Explorer",
    description:
      "Geth를 사용한 자체 Private Network에 올린 Coin Network에서 web3를 활용하여 transaction 정보를 보여주는 블록 탐색기.",
    image: "/ETHERSCAN.png",
    date: "2023.02",
    tags: [
      "Blockchain",
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "MySQL",
      "GitHub",
    ],
    codeUrl: "https://github.com/wn01011/BlockProject",
    category: "frontend",
  },
  {
    id: 6,
    title: "TGTW",
    description:
      "오늘의 집 사이트를 참조하여 만든 쇼핑 사이트. 데이터베이스 구축, socket.io를 사용한 실시간 대화창, 반응형 UI, 관리자 페이지 구현.",
    image: "/TGTW.png",
    date: "2022.12",
    tags: [
      "React",
      "JavaScript",
      "styled-components",
      "Node.js",
      "Redux",
      "MySQL",
    ],
    codeUrl: "https://github.com/wn01011/TGTW",
    liveUrl: "http://noohni.com/Projects/TGTW",
    category: "fullstack",
  },
  {
    id: 7,
    title: "CodeClear",
    description:
      "Market Kurly 쇼핑 사이트를 참조하여 제작한 4인 팀 프로젝트. 관리자 페이지, 데이터베이스 구성, 검색 필터, 상품 구매 플로우 및 고객센터 구현.",
    image: "/CodeClear.png",
    date: "2022.11 - 2022.12",
    tags: ["JavaScript", "Node.js", "MySQL", "GitHub"],
    codeUrl: "https://github.com/wn01011/codeClear",
    liveUrl: "http://noohni.com/Projects/CodeClear",
    category: "fullstack",
  },
  {
    id: 8,
    title: "중간지점 만남 위치 찾기 사이트",
    description:
      "서로 약속을 잡았을 때 중간지점을 찾고 주변 핫플레이스를 추천하는 웹 서비스. 네이버 맵스, 다음 포스트코드, 카카오 맵스 API를 사용한 위치 기반 서비스.",
    image: "/findMiddle.png",
    date: "2022.08",
    tags: [
      "JavaScript",
      "Node.js",
      "REST API",
      "Kakao Maps API",
      "Naver Maps API",
    ],
    codeUrl: "https://github.com/wn01011/FindMiddle",
    liveUrl: "http://noohni.com/FindMiddle",
    category: "frontend",
  },
  {
    id: 9,
    title: "PofolCraft",
    description:
      "Minecraft를 참조하여 만든 Voxel 세상에서 적을 잡고 스테이지를 클리어하는 게임. FPS 조준 보조, 몫 패턴 설계, 셔이더 개발, 복셀 맵 구현 및 최적화 작업 수행.",
    image: "/pofolcraft.png",
    date: "2021.11 - 2021.12",
    tags: ["Unity", "C#", "Unity Shader", "게임 개발"],
    codeUrl: "https://github.com/wn01011/PofolCraft",
    videoUrl: "https://www.youtube.com/watch?v=5t1vC-FnTVQ",
    category: "game",
  },
  {
    id: 101,
    title: "새싹해커톤 프로젝트",
    description: "디자인 시안에 맞춰 UI 구현 역할을 담당한 해커톤 프로젝트.",
    date: "2024.07",
    image: "/새싹해커톤.png",
    tags: ["React", "UI", "해커톤"],
    codeUrl: "https://github.com/wn01011/saessack_front.git",
    category: "frontend",
  },
  {
    id: 100,
    title: "mk_component",
    description:
      "UI로 지정하는 대로 간단한 리액트 컴포넌트 코드를 복사할 수 있게 제공하는 프로젝트.",
    date: "2024.04",
    image: "/mkcomponent.mov",
    tags: ["React", "컴포넌트", "UI"],
    codeUrl: "https://github.com/wn01011/mk_component",
    category: "frontend",
  },
  {
    id: 99,
    title: "A* 유니티 프로젝트",
    description: "A* 알고리즘을 활용한 유니티 기반 프로젝트.",
    image: "/길찾기.png",
    date: "2024.03",
    tags: ["Unity", "A* 알고리즘", "게임"],
    category: "game",
  },
  {
    id: 98,
    title: "web_dodge",
    description: "간단한 닷지 게임.",
    image: "/dodge.mov",
    date: "2024.02",
    tags: ["JavaScript", "게임", "Dodge"],
    category: "game",
  },
];

// 카테고리 필터 데이터
const categories = [
  { id: "all", name: "전체" },
  { id: "frontend", name: "프론트엔드" },
  { id: "fullstack", name: "풀스택" },
  { id: "data", name: "데이터 시각화" },
  { id: "api", name: "API 통합" },
  { id: "game", name: "게임 개발" },
];

// 날짜 기준 최신순 정렬
projects.sort((a, b) => (b.date > a.date ? 1 : -1));

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  // 카테고리별 프로젝트 필터링
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className={S.container}>
      <h1 className={S.title}>프로젝트</h1>
      <p className={S.subtitle}>
        다양한 웹 개발 프로젝트들을 소개합니다. 각 프로젝트는 실제 문제 해결과
        기술적 도전을 포함하고 있습니다.
      </p>

      {/* 카테고리 필터 */}
      <div className={S.filterSection}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${S.filterButton} ${
              activeCategory === category.id
                ? S.filterButtonActive
                : S.filterButtonInactive
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 프로젝트 그리드 */}
      <div className={S.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={S.projectCard}>
            <div className={S.projectImage}>
              {project.image && project.image.endsWith(".mov") ? (
                <video
                  src={getImageSrc(project.image)}
                  controls
                  width={320}
                  height={192}
                  className="w-full h-48 object-cover rounded"
                  poster={getImageSrc("/video-poster.png")}
                  autoPlay
                  muted
                  loop
                >
                  브라우저가 video 태그를 지원하지 않습니다.
                </video>
              ) : project.image ? (
                <Image
                  src={getImageSrc(project.image)}
                  alt={`${project.title} 이미지`}
                  width={320}
                  height={192}
                  className="w-full h-48 object-cover rounded"
                  priority={project.id === 1}
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">
                    {project.title} 이미지
                  </span>
                </div>
              )}
            </div>
            <div className={S.projectContent}>
              <h3 className={S.projectTitle}>{project.title}</h3>
              <p className={S.projectDescription}>{project.description}</p>

              <div className={S.projectTags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={S.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <br />
              <div className={S.projectMeta}>
                <span className={S.projectDate}>{project.date}</span>
              </div>

              <div className={S.projectLinks}>
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={S.projectLink}
                  >
                    <span className={S.projectLinkIcon}>💻</span> 코드 보기
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={S.projectLink}
                  >
                    <span className={S.projectLinkIcon}>🎬</span> 시연 영상
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}