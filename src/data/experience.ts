export interface Project {
  title: string;           // 프로젝트 제목
  period: string;          // 프로젝트 기간
  description: string;     // 프로젝트 설명
  technologies: string[];  // 사용 기술
  highlights: string[];    // 주요 성과
  category: '개발' | '데브옵스' | '인프라' | '최적화' | '유지보수';
}

export interface WorkExperience {
  company: string;         // 회사명
  position: string;        // 직책
  period: string;          // 근무 기간
  location: string;        // 위치
  description: string;     // 업무 개요
  projects: Project[];     // 프로젝트 목록
}

const toroocExperience: WorkExperience = {
  company: "토룩",
  position: "프론트엔드 개발자",
  period: "2023.05 - 2025.05",
  location: "서울, 대한민국",
  description: "로봇 콘텐츠 제작 도구 및 관리 시스템 개발과 유지보수, 웹 인프라 지원 업무 수행",
  projects: [
    {
      title: "Content v1 v2 마이그레이션",
      period: "2024.06 - 2024.12",
      description: "구 빌더툴로 만들어진 content를 신규 DB 구조에 맞춰 변환 후 등록하는 작업",
      technologies: ["JavaScript", "REST API", "Database Migration"],
      highlights: [
        "별도 백엔드 API가 없는 상황에서 수동으로 컨텐츠 마이그레이션 수행",
        "Kotlin 서버에서 신규 DB 구조로 데이터 변환 작업 진행",
        "신규 빌더툴 도입으로 인한 마이그레이션 완료"
      ],
      category: "개발"
    },
    {
      title: "로봇 콘텐츠 빌더툴 개발",
      period: "2023.05 - 2025.05",
      description: "다양한 콘텐츠 제작 요구를 수용할 수 있는 빌더툴 개발",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      highlights: [
        "기존 선형적 콘텐츠 생산 한계를 뛰어넘는 유연한 콘텐츠 제작 도구 개발",
        "게임 클라이언트 경험을 활용한 그래픽 최적화 (줌 상태에 따른 화질 조정)",
        "콘텐츠팀 요구사항을 반영한 다양한 경우의 수 처리 가능한 시스템 구현",
        "정식 기획서 기반 검증 및 배포 진행"
      ],
      category: "개발"
    },
    {
      title: "로봇 콘텐츠 사이트 개발 및 유지보수",
      period: "2023.05 - 2025.05",
      description: "로봇 콘텐츠 관리를 위한 웹 기반 시스템 개발 및 유지보수",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "REST API"],
      highlights: [
        "백엔드 서버가 Kotlin에서 Python으로 이전됨에 따른 API 정리 및 개선",
        "기획서에 맞춘 전체적인 UI 개편",
        "사용자 UX 개선 (인터랙션 피드백, 로딩 표시 등)",
        "로봇 알람 페이지, 페르소나 페이지 개발",
        "콘텐츠 동영상 플레이어 개선",
        "자료실 페이지 개발",
        "콘텐츠 태그 시스템 도입으로 필터링 기능 향상",
        "다양한 플레이어 통합 작업 진행"
      ],
      category: "개발"
    },
    {
      title: "관리자 페이지 개발",
      period: "2023.08 - 2024.03",
      description: "비 개발자가 계정 및 로봇 관련 DB 작업을 할 수 있는 관리자 도구 개발",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "REST API"],
      highlights: [
        "계정 생성, 수정, 삭제 기능 구현",
        "로봇 관련 정보 수정 및 삭제 기능 구현",
        "영업팀에서 직접 계정 생성할 수 있는 시스템 배포"
      ],
      category: "개발"
    },
    {
      title: "배포용 서버 개설",
      period: "2024.11",
      description: "Kotlin 서버 삭제에 따른 Android APK 다운로드 서버 신규 구축",
      technologies: ["Node.js", "Express", "Ubuntu", "AWS"],
      highlights: [
        "서비스 중인 안드로이드 APK 다운로드 기능 유지를 위한 서버 구축",
        "Ubuntu 환경에서 Node Express 서버 구성"
      ],
      category: "인프라"
    },
    {
      title: "도메인 체계 정리",
      period: "2024.02 - 2024.03",
      description: "무분별하게 사용되던 도메인 이름 정리 및 SSL 설정",
      technologies: ["AWS", "SSL", "EC2", "Load Balancer"],
      highlights: [
        ".net은 테스트 서버, .com은 운영서버로 표준화",
        "와일드카드 SSL 인증서 적용으로 *.torooc.com / *.torooc.net 도메인 보안 통합",
        "EC2 로드밸런서를 활용한 도메인 기반 라우팅 구성"
      ],
      category: "인프라"
    },
    {
      title: "백엔드 스트레스 테스트",
      period: "2024.12",
      description: "백엔드 성능 측정을 위한 부하 테스트 환경 구축",
      technologies: ["AWS EC2", "멀티쓰레딩", "API 테스팅"],
      highlights: [
        "EC2 컴퓨팅 자원을 활용한 다중 클라이언트 시뮬레이션",
        "멀티쓰레드를 활용한 인스턴스당 100개 동시 요청 구현",
        "로그인 요청 3개 세트 1000회 테스트로 백엔드 성능 한계 확인"
      ],
      category: "최적화"
    },
    {
      title: "언어별 백엔드 API 속도 테스트",
      period: "2024.09",
      description: "다양한 프로그래밍 언어별 API 성능 비교 테스트",
      technologies: ["JavaScript", "Python", "C#", "API 개발"],
      highlights: [
        "동일한 로직의 로그인 API를 세 가지 언어로 구현",
        "언어별 30회 테스트 진행",
        "결과: JavaScript(134.60ms), Python(89.98ms), C#(156.79ms)"
      ],
      category: "최적화"
    },
    {
      title: "RDS 쿼리 최적화",
      period: "2024.08",
      description: "콘텐츠 로딩 속도 개선을 위한 데이터베이스 쿼리 최적화",
      technologies: ["AWS RDS", "SQL", "복합 인덱스"],
      highlights: [
        "콘텐츠 조회 API SQL 문 기반 최적화 작업",
        "복합 인덱스 설계를 통한 속도 개선",
        "ANALYZE 명령으로 성능 비교: 6.747초 → 4.081초 (약 40% 개선)"
      ],
      category: "최적화"
    },
    {
      title: "로봇 업데이트 서버 자동배포 복구",
      period: "2025.02",
      description: "미 관리 상태의 자동배포 파이프라인 복구 작업",
      technologies: ["AWS", "CI/CD", "GitHub"],
      highlights: [
        "AWS Code Commit에서 GitHub로 이관된 레포지토리 참조 수정",
        "Name 태그 기반 변경 감지 시스템 재조정"
      ],
      category: "데브옵스"
    },
    {
      title: "웹훅 서버 배포 문서화",
      period: "2024.07",
      description: "배포 담당자 부재로 인한 웹훅 서버 배포 방법 조사 및 문서화",
      technologies: ["AWS", "CI/CD", "문서화"],
      highlights: [
        "기존 배포 프로세스 조사 및 테스트",
        "표준 배포 프로세스 문서화 완료"
      ],
      category: "데브옵스"
    },
    {
      title: "외주 유니티 영어 콘텐츠 페이지",
      period: "2024.03 - 2024.12",
      description: "로봇과 소통하는 유니티 어플리케이션의 웹 페이지 배포",
      technologies: ["Unity", "Web", "S3"],
      highlights: [
        "Unity 어플리케이션 웹 배포 지원",
        "S3 경로 자동 조회 시스템으로 UI 자동 업데이트 구현"
      ],
      category: "개발"
    },
    {
      title: "로그 서버 개발",
      period: "2024.10",
      description: "API 호출 로그 기록 및 뉴스 검색 기능 구현",
      technologies: ["Node.js", "Express", "로깅"],
      highlights: [
        "로봇 서비스용 API 호출 로그 시스템 구축",
        "백엔드 부재 상황에서 임시 뉴스 검색 기능 구현"
      ],
      category: "개발"
    },
    {
      title: "인지기능앱 / 블루마블앱 연동",
      period: "2024.05 - 2024.08",
      description: "외주 Unity 앱과 로봇 연결 기능 개발",
      technologies: ["Unity", "블루투스", "MQTT"],
      highlights: [
        "블루투스로 주변 로봇 장치 스캔 기능 구현",
        "MQTT 통신을 통한 로봇 연결 시스템 개발"
      ],
      category: "개발"
    }
  ]
};

export default toroocExperience;