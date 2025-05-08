import Link from 'next/link';
import * as S from './page.style';

export default function About() {
  return (
    <div className={S.container}>
      <h1 className={S.title}>자기소개</h1>
      
      <section className={S.section}>
        <h2 className={S.subTitle}>프로필</h2>
        <p className={S.paragraph}>
          안녕하세요! 저는 <span className={S.highlight}>프론트엔드 개발자</span>로, 
          사용자 경험을 중요시하는 웹 애플리케이션 개발에 열정을 가지고 있습니다. 
          React와 Next.js를 주로 사용하며, 모던 웹 개발 기술을 활용하여 
          직관적이고 반응성 높은 인터페이스를 구현하는 것을 좋아합니다.
        </p>
        <p className={S.paragraph}>
          항상 새로운 기술을 배우고 도전하는 것을 즐기며, 팀원들과의 협업을 통해 
          더 나은 결과물을 만들어내는 과정을 가치 있게 생각합니다.
        </p>
      </section>
      
      <section className={S.section}>
        <h2 className={S.subTitle}>경력</h2>
        <div className={S.timeline}>
          <div className={S.timelineItem}>
            <div className={S.timelineDot}></div>
            <div className={S.timelineDate}>2023년 - 현재</div>
            <h3 className={S.timelineTitle}>시니어 프론트엔드 개발자</h3>
            <p className={S.timelineDesc}>ABC 테크놀로지</p>
            <p className={S.timelineDesc}>
              대규모 SPA 애플리케이션 개발, 성능 최적화, 팀 리딩
            </p>
          </div>
          <div className={S.timelineItem}>
            <div className={S.timelineDot}></div>
            <div className={S.timelineDate}>2020년 - 2023년</div>
            <h3 className={S.timelineTitle}>프론트엔드 개발자</h3>
            <p className={S.timelineDesc}>XYZ 솔루션</p>
            <p className={S.timelineDesc}>
              React 기반 대시보드 및 관리 시스템 개발, UI/UX 개선
            </p>
          </div>
          <div className={S.timelineItem}>
            <div className={S.timelineDot}></div>
            <div className={S.timelineDate}>2018년 - 2020년</div>
            <h3 className={S.timelineTitle}>주니어 웹 개발자</h3>
            <p className={S.timelineDesc}>스타트업 스튜디오</p>
            <p className={S.timelineDesc}>
              반응형 웹사이트 개발, jQuery 및 Vue.js 활용
            </p>
          </div>
        </div>
      </section>
      
      <section className={S.section}>
        <h2 className={S.subTitle}>기술 스택</h2>
        <p className={S.paragraph}>
          제가 능숙하게 다룰 수 있는 기술 스택입니다:
        </p>
        <div className={S.skillsGrid}>
          <span className={S.skillBadge}>React</span>
          <span className={S.skillBadge}>Next.js</span>
          <span className={S.skillBadge}>TypeScript</span>
          <span className={S.skillBadge}>JavaScript</span>
          <span className={S.skillBadge}>Tailwind CSS</span>
          <span className={S.skillBadge}>Styled Components</span>
          <span className={S.skillBadge}>Redux</span>
          <span className={S.skillBadge}>React Query</span>
          <span className={S.skillBadge}>GraphQL</span>
          <span className={S.skillBadge}>RESTful API</span>
          <span className={S.skillBadge}>Git</span>
          <span className={S.skillBadge}>Jest</span>
        </div>
      </section>
      
      <section className={S.section}>
        <h2 className={S.subTitle}>교육</h2>
        <div className={S.timeline}>
          <div className={S.timelineItem}>
            <div className={S.timelineDot}></div>
            <div className={S.timelineDate}>2022년 8월 - 2023년</div>
            <h3 className={S.timelineTitle}>블록체인 기반 핀테크 및 응용SW개발자 양성과정</h3>
            <p className={S.timelineDesc}>주식회사 경일게임아카데미</p>
            <p className={S.timelineDesc}>
              JavaScript 기반 웹 프론트엔드/백엔드 및 블록체인 과정
            </p>
          </div>
          <div className={S.timelineItem}>
            <div className={S.timelineDot}></div>
            <div className={S.timelineDate}>2021년 6월 - 2021년 12월</div>
            <h3 className={S.timelineTitle}>게임프로그래머 유니티</h3>
            <p className={S.timelineDesc}>부산예일직업전문학교</p>
            <p className={S.timelineDesc}>
              Unity 및 C# 기반 게임 개발 과정
            </p>
          </div>
          <div className={S.timelineItem}>
            <div className={S.timelineDot}></div>
            <div className={S.timelineDate}>2018년</div>
            <h3 className={S.timelineTitle}>조경학과 (중퇴)</h3>
            <p className={S.timelineDesc}>성균관대학교</p>
          </div>
        </div>
      </section>
      
      <div className="text-center mt-12">
        <Link href="/resume" className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
          경력 기술서 보기
        </Link>
      </div>
    </div>
  );
}