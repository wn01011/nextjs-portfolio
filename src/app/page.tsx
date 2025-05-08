import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Github, Code, Star } from 'lucide-react';
import toroocExperience from '@/data/experience';
import * as S from './page.style';
import { getImageSrc } from "@/utils/getImageSrc";

// 카테고리별 색상 정의
const categoryColors = {
  개발: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700",
  데브옵스:
    "bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700",
  인프라:
    "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700",
  최적화:
    "bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700",
  유지보수:
    "bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700",
};

// 주요 기술
const highlightTech = [
  {
    name: "프론트엔드",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Styled-components",
      "Zustand",
      "Redux-toolkit",
      "React-hook-form",
      "React-query",
    ],
    icon: <Code className="w-8 h-8 text-blue-500 mb-2" />,
  },
  {
    name: "백엔드/인프라",
    skills: ["Node.js", "Express", "AWS", "REST API", "Docker"],
    icon: <Star className="w-8 h-8 text-emerald-500 mb-2" />,
  },
  {
    name: "개발도구",
    skills: ["GitHub", "Cursor", "ClaudeDesktop"],
    icon: <Github className="w-8 h-8 text-gray-500 mb-2" />,
  },
];

// 주요 프로젝트 5개 선택
const featuredProjects = toroocExperience.projects.filter((project) =>
  [
    "로봇 콘텐츠 빌더툴 개발",
    "로봇 콘텐츠 사이트 개발 및 유지보수",
    "RDS 쿼리 최적화",
    "도메인 체계 정리",
    "관리자 페이지 개발",
  ].includes(project.title)
);

export default function Home() {
  return (
    <main className={S.main}>
      {/* 히어로 섹션 */}
      <section className={S.minHero}>
        <div className={S.container}>
          <div className={S.heroGrid}>
            <div className={S.order2}>
              <h1 className={S.heroTitle}>
                <span className="text-primary-500">생산성</span>향상을
                <br />
                추구하는
                <br />
                개발자
              </h1>
              <p className={S.heroDesc}>
                로봇 콘텐츠 개발부터 인프라 최적화까지,
                <br />
                다양한 분야의 개발 경험을 소개합니다.
              </p>
              <div className={S.heroBtnWrap}>
                <Link href="/experience" className={S.heroBtn}>
                  경력 보기 <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link href="/career-flow" className={S.heroBtn2}>
                  경력 시각화 <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className={S.order1}>
              <div className={S.heroProfileWrap}>
                <div className={S.heroProfile}>
                  <Image
                    src={getImageSrc("/profile.jpeg")}
                    alt="프로필 이미지"
                    width={288}
                    height={288}
                    priority
                    className={S.profileImageRotate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 토룩 경력 하이라이트 */}
      <section className={S.sectionBg}>
        <div className={S.container}>
          <div className={S.sectionCenter}>
            <h2 className={S.sectionTitle}>토룩에서의 개발 경험</h2>
            <p className={S.sectionSubtitle}>
              {toroocExperience.period} | {toroocExperience.position}
            </p>
          </div>
          <div className={S.projectGrid}>
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`${S.projectCard} ${
                  categoryColors[project.category]
                }`}
              >
                <h3 className={S.projectCardTitle}>{project.title}</h3>
                <p className={S.projectCardPeriod}>{project.period}</p>
                <p className={S.projectCardDesc}>{project.description}</p>
                <div className={S.projectCardTech}>
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className={S.projectCardTechItem}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={S.projectCardTechItem}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <Link
                  href={`/experience#${project.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className={S.projectCardMore}
                >
                  자세히 보기 <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/experience" className={S.allProjectBtn}>
              모든 프로젝트 보기 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className={S.section}>
        <div className={S.container}>
          <h2 className={S.sectionTitle + " mb-16 text-center"}>기술 스택</h2>
          <div className={S.stackGrid}>
            {highlightTech.map((tech, index) => (
              <div key={index} className={S.stackCard}>
                {tech.icon}
                <h3 className={S.stackCardTitle}>{tech.name}</h3>
                <ul className="text-center">
                  {tech.skills.map((skill, i) => (
                    <li key={i} className={S.stackCardSkill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/skills" className={S.stackAllBtn}>
              모든 기술 스택 보기 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 경력 시각화 섹션 */}
      <section className={S.flowSection}>
        <div className={S.container}>
          <div className={S.flowWrap}>
            <div className="text-center mb-12">
              <h2 className={S.flowTitle}>경력 시각화</h2>
              <p className={S.flowDesc}>
                토룩 프로젝트와 기술 간의 연관성을 인터랙티브 그래프로
                탐색해보세요.
              </p>
            </div>
            <div className={S.flowPreview}>
              <Image
                src={getImageSrc("/viewer.png")}
                alt="경력 시각화 미리보기"
                width={600}
                height={400}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="text-center">
              <Link href="/career-flow" className={S.flowBtn}>
                바로가기 <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 마지막 CTA 섹션 */}
      <section className={S.ctaSection}>
        <div className={S.container}>
          <div className={S.ctaWrap}>
            <h2 className={S.ctaTitle}>함께 협업해보세요</h2>
            <p className={S.ctaDesc}>
              프론트엔드 개발부터 인프라 설계까지, 다양한 경험을 바탕으로 한
              협업을 기대합니다.
            </p>
            <Link href="/contact" className={S.ctaBtn}>
              연락하기 <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}