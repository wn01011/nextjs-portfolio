import * as S from './page.style';

export default function Resume() {
  return (
    <div className={S.container}>
      <div className={S.resumeContainer}>
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
            5년 이상의 프론트엔드 개발 경험을 가진 개발자로, 사용자 중심의
            인터페이스 설계와 성능 최적화에 역량을 갖추고 있습니다. React와
            Next.js 기반의 웹 애플리케이션 개발에 전문성을 보유하고 있으며,
            새로운 기술 학습과 팀 협업에 열정을 가지고 있습니다.
          </p>
        </section>

        {/* 경력 */}
        <section className={S.section}>
          <h2 className={S.sectionTitle}>경력</h2>

          <div className={S.experienceItem}>
            <div className={S.experienceHeader}>
              <div>
                <span className={S.experienceTitle}>
                  시니어 프론트엔드 개발자
                </span>
                <span> @ </span>
                <span className={S.experienceCompany}>ABC 테크놀로지</span>
              </div>
              <span className={S.experienceDate}>2023년 - 현재</span>
            </div>
            <ul className={S.experienceDesc + " list-disc list-inside"}>
              <li>대규모 SPA 애플리케이션 성능 최적화 (로딩 시간 40% 개선)</li>
              <li>5명의 프론트엔드 개발팀 리드, 코드 리뷰 및 아키텍처 설계</li>
              <li>
                TypeScript, Next.js, React Query를 활용한 견고한 코드베이스 구축
              </li>
              <li>디자인 시스템 구축 및 컴포넌트 라이브러리 개발</li>
            </ul>
          </div>

          <div className={S.experienceItem}>
            <div className={S.experienceHeader}>
              <div>
                <span className={S.experienceTitle}>프론트엔드 개발자</span>
                <span> @ </span>
                <span className={S.experienceCompany}>XYZ 솔루션</span>
              </div>
              <span className={S.experienceDate}>2020년 - 2023년</span>
            </div>
            <ul className={S.experienceDesc + " list-disc list-inside"}>
              <li>실시간 데이터 시각화 대시보드 개발 (React, D3.js)</li>
              <li>RESTful API와 GraphQL을 활용한 백엔드 통합</li>
              <li>반응형 디자인 및 크로스 브라우저 호환성 개선</li>
              <li>Jest와 React Testing Library를 활용한 테스트 자동화</li>
            </ul>
          </div>

          <div className={S.experienceItem}>
            <div className={S.experienceHeader}>
              <div>
                <span className={S.experienceTitle}>주니어 웹 개발자</span>
                <span> @ </span>
                <span className={S.experienceCompany}>스타트업 스튜디오</span>
              </div>
              <span className={S.experienceDate}>2018년 - 2020년</span>
            </div>
            <ul className={S.experienceDesc + " list-disc list-inside"}>
              <li>반응형 웹사이트 UI/UX 개발</li>
              <li>jQuery에서 Vue.js로의 레거시 코드 마이그레이션</li>
              <li>CSS 애니메이션 및 인터랙티브 요소 구현</li>
            </ul>
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
                <span className={S.skillItemStrong}>React</span>
                <span className={S.skillItemStrong}>Next.js</span>
                <span className={S.skillItemStrong}>TypeScript</span>
                <span className={S.skillItem}>JavaScript</span>
                <span className={S.skillItem}>HTML5</span>
                <span className={S.skillItem}>CSS3</span>
                <span className={S.skillItem}>Tailwind CSS</span>
                <span className={S.skillItem}>Styled Components</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">
                상태 관리 & API
              </h3>
              <div className={S.skillsList}>
                <span className={S.skillItem}>Redux</span>
                <span className={S.skillItemStrong}>React Query</span>
                <span className={S.skillItem}>Context API</span>
                <span className={S.skillItem}>GraphQL</span>
                <span className={S.skillItem}>RESTful API</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">
                테스트 & 도구
              </h3>
              <div className={S.skillsList}>
                <span className={S.skillItem}>Jest</span>
                <span className={S.skillItem}>React Testing Library</span>
                <span className={S.skillItem}>Git</span>
                <span className={S.skillItem}>GitHub</span>
                <span className={S.skillItem}>Webpack</span>
                <span className={S.skillItem}>Vite</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">
                기타
              </h3>
              <div className={S.skillsList}>
                <span className={S.skillItem}>Node.js</span>
                <span className={S.skillItem}>Express</span>
                <span className={S.skillItem}>CI/CD</span>
                <span className={S.skillItem}>Agile/Scrum</span>
                <span className={S.skillItem}>Figma</span>
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
                <span className={S.educationTitle}>컴퓨터 공학 학사</span>
                <span> @ </span>
                <span className={S.educationInstitution}>OO 대학교</span>
              </div>
              <span className={S.educationDate}>2014년 - 2018년</span>
            </div>
          </div>
        </section>

        {/* 자격증 및 수상 */}
        <section className={S.section}>
          <h2 className={S.sectionTitle}>자격증 및 수상</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>정보처리기사 (2018)</li>
            <li>AWS 클라우드 프랙티셔너 (2020)</li>
            <li>우수 개발자상 - XYZ 솔루션 (2022)</li>
          </ul>
        </section>

        {/* 다운로드 버튼 */}
        <div className="text-center">
          <button className={S.downloadButton}>PDF로 다운로드</button>
        </div>
      </div>
    </div>
  );
}