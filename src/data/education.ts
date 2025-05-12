export interface Education {
  institution: string;     // 교육기관
  course: string;          // 과정명
  period: string;          // 기간
  location?: string;       // 위치 (선택)
  description?: string;    // 설명 (선택)
  skills: string[];        // 습득 기술
  highlights?: string[];   // 주요 내용 (선택)
}

const educationData: Education[] = [
  {
    institution: "주식회사 경일게임아카데미",
    course: "블록체인 기반 핀테크 및 응용SW개발자 양성과정",
    period: "2022.08 - 2023",
    description: "JavaScript 기반 웹 프론트엔드/백엔드 및 블록체인 과정",
    skills: [
      "React",
      "Node.js",
      "Blockchain",
      "AWS",
      "TypeScript",
      "REST API",
      "Ajax",
      "Redux",
      "Next.js",
      "GitHub",
      "MySQL",
    ],
    highlights: [
      "React와 Node.Js Express 서버를 이용한 홈페이지 구축",
      "AWS의 EC2, S3를 사용한 배포",
      "React를 이용한 SPA, CSR 어플리케이션 구현",
      "Next.Js를 이용한 SSR 어플리케이션 구현",
      "Redux를 사용한 전역 상태 관리",
      "Git을 이용한 협업",
      "web3 라이브러리를 사용한 스마트 컨트랙트 배포",
    ],
  },
  {
    institution: "부산예일직업전문학교",
    course: "게임프로그래머 유니티",
    period: "2021.06 - 2021.12",
    skills: ["Unity", "C#"],
    highlights: [
      "Unity 및 C# 기반 게임 개발",
      "3D 게임 구현 및 최적화",
      "셰이더 프로그래밍 및 시각 효과 구현",
    ],
  },
  {
    institution: "성균관대학교",
    course: "조경학과 (중퇴)",
    period: "2018",
    skills: [],
  },
];

export default educationData;