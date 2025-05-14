"use client";
import { getImageSrc } from "@/utils/getImageSrc";
import * as S from "./page.style";
import Image from "next/image";
import { useRef } from "react";
// import html2pdf from "html2pdf.js";

export default function Resume() {
  const pdfRef = useRef<HTMLDivElement>(null);

  // const handleDownloadPDF = () => {
  //   if (pdfRef.current) {
  //     // PDF 버튼을 임시로 숨김 처리
  //     const btn = document.getElementById("pdf-download-btn");
  //     const originalDisplay = btn ? btn.style.display : "";
  //     if (btn) btn.style.display = "none";

  //     // 다크모드 강제 해제 (resume 영역만)
  //     const resumeEl = pdfRef.current;
  //     const originalBg = resumeEl.style.backgroundColor;
  //     const originalColor = resumeEl.style.color;
  //     resumeEl.style.backgroundColor = "#fff";
  //     resumeEl.style.color = "#222";
  //     resumeEl.classList.remove("dark");

  //     // 하위 모든 요소에서 dark 클래스를 제거
  //     resumeEl.querySelectorAll(".dark").forEach((el) => {
  //       el.classList.remove("dark");
  //     });

  //     // stack-badge 중앙 정렬 스타일 강제 적용
  //     const stackBadges = resumeEl.querySelectorAll(".stack-badge");
  //     const originalBadgeStyles: string[] = [];
  //     stackBadges.forEach((el) => {
  //       originalBadgeStyles.push(el.getAttribute("style") || "");
  //       el.setAttribute(
  //         "style",
  //         (el.getAttribute("style") || "") +
  //           "display:flex;align-items:center;justify-content:center;height:32px;min-width:48px;padding:0 12px;font-size:1rem;vertical-align:middle;"
  //       );
  //     });

  //     html2pdf()
  //       .from(resumeEl)
  //       .save("resume.pdf")
  //       .then(() => {
  //         if (btn) btn.style.display = originalDisplay;
  //         resumeEl.style.backgroundColor = originalBg;
  //         resumeEl.style.color = originalColor;
  //         // stack-badge 스타일 원복
  //         stackBadges.forEach((el, idx) => {
  //           el.setAttribute("style", originalBadgeStyles[idx]);
  //         });
  //       });
  //   }
  // };

  return (
    <div ref={pdfRef} className={S.container} id="resume-root">
      <div className={S.resumeContainer}>
        <div className="flex justify-center mb-6">
          <Image
            src={getImageSrc("/profile.jpeg")}
            alt="프로필 이미지"
            width={112}
            height={112}
            className="rounded-full object-cover border-2 border-primary-600 rotate-45 aspect-square"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
        <h1 className={S.title}>경력 기술서</h1>

        {/* 연락처 정보 */}
        <section className={S.contactInfo}>
          <div>
            <div className={S.contactItem}>
              <span>이메일: </span>
              <a
                href="mailto:wn010111@gmail.com"
                className="ml-1 text-primary-600 hover:underline"
              >
                wn010111@gmail.com
              </a>
            </div>
            <div className={S.contactItem}>
              <span>연락처: </span>
              <span className="ml-1">010-8506-7867</span>
            </div>
            <div className={S.contactItem}>
              <span>위치: </span>
              <span className="ml-1">서울특별시, 대한민국</span>
            </div>
          </div>
          <div>
            <div className={S.contactItem}>
              <span>GitHub: </span>
              <a
                href="https://github.com/wn01011"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-primary-600 hover:underline"
              >
                github.com/wn01011
              </a>
            </div>
          </div>
        </section>

        {/* 요약 */}
        <section className={S.section}>
          <h2 className={S.sectionTitle}>프로필 요약</h2>
          <p className="text-gray-600 dark:text-gray-300">
            로봇 콘텐츠 제작 도구 및 관리 시스템 개발, 웹 인프라 지원 등 다양한
            프로젝트를 경험한 프론트엔드 개발자입니다. Next.js, TypeScript,
            React를 중심으로 사용자 경험과 성능 최적화에 집중하며, 팀과의 협업과
            새로운 기술 도입에 적극적입니다.
          </p>
        </section>

        {/* 가치관 */}
        <section className={S.section}>
          <h2 className={S.sectionTitle}>중요하게 생각하는 점</h2>
          <p className="text-primary-700 dark:text-primary-300 font-semibold">
            저는 예측 가능한 미래의 비효율과 불편함을 방치하지 않으며,
            <br />
            생산성 향상을 위해 선제적으로 개선하는 자세를 중요하게 생각합니다.
          </p>
        </section>

        {/* 경력 */}
        <section className={S.section}>
          <h2 className={S.sectionTitle}>경력</h2>
          {/* 토룩 경력 */}
          <div className={S.experienceItem}>
            <div className={S.experienceHeader}>
              <div>
                <span className={S.experienceTitle}>프론트엔드 개발자</span>
                <span> @ </span>
                <span className={S.experienceCompany}>토룩</span>
              </div>
              <span className={S.experienceDate}>2023.05 - 2025.05</span>
            </div>
            <div className={S.experienceDesc}>
              <div>
                로봇 콘텐츠 제작 도구 및 관리 시스템 개발과 유지보수, 웹 인프라
                지원 업무 수행
              </div>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <b>로봇 콘텐츠 빌더툴 개발 (2023.05~2025.05)</b>
                  <br />
                  - 다양한 콘텐츠 제작 요구를 수용할 수 있는 빌더툴 개발
                  <br />- 유연한 콘텐츠 제작 도구, 그래픽 최적화, 다양한 경우의
                  수 처리, 정식 기획서 기반 검증 및 배포
                </li>
                <li>
                  <b>로봇 콘텐츠 사이트 개발 및 유지보수 (2023.05~2025.05)</b>
                  <br />
                  - 웹 기반 시스템 개발 및 유지보수
                  <br />- API 정리 및 개선, UI 개편, UX 개선, 동영상 플레이어
                  개선 등
                </li>
                <li>
                  <b>관리자 페이지 개발 (2025.01~2025.02)</b>
                  <br />
                  - 비개발자도 DB 작업 가능한 관리자 도구 개발
                  <br />- 계정/로봇 정보 관리, 영업팀 시스템 배포
                </li>
                <li>
                  <b>
                    배포용 서버 개설, 도메인 체계 정리, 백엔드 스트레스 테스트,
                    RDS 쿼리 최적화, 레거시 시스템 유지보수 등
                  </b>
                </li>
              </ul>
            </div>
          </div>
          {/* 111퍼센트 경력 */}
          <div className={S.experienceItem}>
            <div className={S.experienceHeader}>
              <div>
                <span className={S.experienceTitle}>
                  Unity Developer (인턴)
                </span>
                <span> @ </span>
                <span className={S.experienceCompany}>111퍼센트</span>
              </div>
              <span className={S.experienceDate}>2022.02 - 2022.05</span>
            </div>
            <div className={S.experienceDesc}>
              <div>모바일 게임 서비스 회사, 크리에이티브본부 소속</div>
              <ul className="list-disc list-inside mt-2">
                <li>
                  회사 자체 게임 서버 엔진 학습 및 핵심 재미요소 기반 prototype
                  제작
                </li>
                <li>3개월 인턴십 수행</li>
                <li>Unity를 활용한 게임 프로토타입 개발 및 검증</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className={S.section}>
          <h2 className={S.sectionTitle}>기술 스택</h2>
          <div className={S.resumeGrid}>
            <div>
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">
                프론트엔드
              </h3>
              <div className={S.skillsList}>
                <span className={S.skillItem + " stack-badge"}>React</span>
                <span className={S.skillItem + " stack-badge"}>Next.js</span>
                <span className={S.skillItem + " stack-badge"}>TypeScript</span>
                <span className={S.skillItem + " stack-badge"}>JavaScript</span>
                <span className={S.skillItem + " stack-badge"}>HTML5</span>
                <span className={S.skillItem + " stack-badge"}>CSS3</span>
                <span className={S.skillItem + " stack-badge"}>
                  Tailwind CSS
                </span>
                <span className={S.skillItem + " stack-badge"}>
                  Styled Components
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">
                상태 관리 & API
              </h3>
              <div className={S.skillsList}>
                <span className={S.skillItem + " stack-badge"}>Redux</span>
                <span className={S.skillItem + " stack-badge"}>
                  React Query
                </span>
                <span className={S.skillItem + " stack-badge"}>
                  Context API
                </span>
                <span className={S.skillItem + " stack-badge"}>GraphQL</span>
                <span className={S.skillItem + " stack-badge"}>
                  RESTful API
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">
                기타
              </h3>
              <div className={S.skillsList}>
                <span className={S.skillItem + " stack-badge"}>Node.js</span>
                <span className={S.skillItem + " stack-badge"}>Express</span>
                <span className={S.skillItem + " stack-badge"}>CI/CD</span>
              </div>
            </div>
          </div>
        </section>

        {/* 교육 */}
        <section className={S.section}>
          <h2 className={S.sectionTitle}>교육</h2>
          <div className={S.educationItem}>
            <div className={S.educationHeader}>
              <div>
                <span className={S.educationTitle}>
                  블록체인 기반 핀테크 및 응용SW개발자 양성과정
                </span>
                <span> @ </span>
                <span className={S.educationInstitution}>
                  주식회사 경일게임아카데미
                </span>
              </div>
              <span className={S.educationDate}>2022년 8월 - 2023년</span>
            </div>
            <ul className={S.experienceDesc + " list-disc list-inside"}>
              <li>JavaScript 기반 웹 프론트엔드/백엔드 및 블록체인 과정</li>
              <li>React와 Node.Js Express 서버를 이용한 홈페이지 구축 경험</li>
              <li>AWS의 EC2, S3를 사용한 배포 경험</li>
              <li>React를 이용한 SPA, CSR 어플리케이션 구현</li>
              <li>Next.Js를 이용한 SSR 어플리케이션 구현</li>
              <li>Redux를 사용한 전역 상태 관리</li>
              <li>Git을 이용한 협업</li>
              <li>web3 라이브러리를 사용한 스마트 컨트랙트 배포</li>
            </ul>
          </div>

          <div className={S.educationItem}>
            <div className={S.educationHeader}>
              <div>
                <span className={S.educationTitle}>게임프로그래머 유니티</span>
                <span> @ </span>
                <span className={S.educationInstitution}>
                  부산예일직업전문학교
                </span>
              </div>
              <span className={S.educationDate}>2021년 6월 - 2021년 12월</span>
            </div>
            <ul className={S.experienceDesc + " list-disc list-inside"}>
              <li>Unity 및 C# 기반 게임 개발</li>
              <li>3D 게임 구현 및 최적화</li>
              <li>셰이더 프로그래밍 및 시각 효과 구현</li>
            </ul>
          </div>

          <div className={S.educationItem}>
            <div className={S.educationHeader}>
              <div>
                <span className={S.educationTitle}>조경학과 (중퇴)</span>
                <span> @ </span>
                <span className={S.educationInstitution}>성균관대학교</span>
              </div>
              <span className={S.educationDate}>2018년</span>
            </div>
          </div>
        </section>

        {/* 다운로드 버튼 */}
        <div className="text-center">
          <a
            id="pdf-download-btn"
            href="/resume.pdf"
            download
            className={S.downloadButton}
          >
            PDF로 다운로드
          </a>
        </div>
      </div>
    </div>
  );
}
