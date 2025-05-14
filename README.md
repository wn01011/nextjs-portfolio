# 프론트엔드 포트폴리오 사이트

**Next.js, TypeScript, Tailwind CSS, ReactFlow**를 활용해 구축한 프론트엔드 개발자 포트폴리오 사이트입니다.  

**▶️ 배포 주소:** [https://wn01011.github.io/nextjs-portfolio/](https://wn01011.github.io/nextjs-portfolio/)

---

## 주요 기능

- **반응형 디자인**: 모바일/PC 모두 최적화
- **경력/프로젝트/학력 데이터 관리**: TypeScript 기반 구조화된 데이터 관리
- **인터랙티브 기술 스택 시각화**: ReactFlow로 구현, 카테고리별 필터 및 동적 노드
- **경력 시각화**: 프로젝트-기술-회사 간 네트워크 그래프
- **프로젝트 포트폴리오**: 다양한 카테고리별 프로젝트 소개
- **경력 기술서/이력서**: 상세 경력 및 학력 정보 제공
- **연락처/소개**: 자기소개, 연락처, PDF 이력서 다운로드

---

## 기술 스택

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **ReactFlow** (시각화)
- **Puppeteer, html2pdf.js** (PDF 변환)

---

## 폴더 구조

```
src/
  app/           # 라우트별 페이지 (about, contact, skills, projects, experience, resume, career-flow 등)
  components/    # UI 컴포넌트 (home, layout, experience, flow 등)
  data/          # 경력, 학력 등 정적 데이터 (TypeScript interface로 구조화)
  utils/         # 유틸리티 함수
public/          # 이미지, PDF 등 정적 파일
```

---

## 고민/설계 포인트

### 1. **경력/프로젝트/학력 데이터 관리**
- **TypeScript interface**로 구조화하여, 데이터의 일관성과 타입 안정성을 확보.
- **고민**: 경력/프로젝트가 복잡하게 얽혀있을 때, 데이터 구조를 어떻게 설계해야 확장성과 유지보수가 쉬울지 고민함.
- **실제 적용**: `experience.ts`, `education.ts` 등에서 interface와 배열로 관리.

### 2. **기술 스택/경력 시각화**
- **ReactFlow**를 활용해 기술/경력/프로젝트 간의 관계를 네트워크 그래프로 시각화.
- **고민**: 
  - 클라이언트 사이드에서만 동작해야 하므로 dynamic import, 오류 fallback 등 처리 필요.
  - 노드 타입(프론트엔드/백엔드/DB/도구 등)별 필터, 범례, 미니맵 등 UX 고민.
  - 데이터가 많아질 때 시각화가 복잡해지는 문제.
- **실제 적용**: `SkillsClient.tsx`, `CareerFlowPage.tsx` 등에서 동적 import, fallback UI, 필터링 등 구현.

### 3. **프로젝트/경력/기술의 연결성**
- **고민**: 
  - 프로젝트와 경력, 기술 스택이 서로 어떻게 연결되는지 한눈에 보여주고 싶었음.
  - 단순 리스트가 아니라, 시각적 네트워크로 보여주기 위해 구조 설계와 시각화 방식에 신경씀.
- **실제 적용**: 경력 시각화(ReactFlow), 프로젝트별 태그 및 상세 연결.

### 4. **PDF 이력서/경력 기술서**
- **고민**: 
  - 웹에서 바로 PDF로 변환해 다운로드할 수 있도록 하려면 어떤 라이브러리가 적합한지, 한글/이미지 등 호환성 문제.
- **실제 적용**: Puppeteer, html2pdf.js 등 도입.

### 5. **반응형/접근성/다크모드**
- **고민**: 
  - Tailwind CSS를 적극 활용해 반응형, 다크모드, 접근성(aria 등)까지 신경씀.
  - 모바일에서의 레이아웃 깨짐, 폰트 크기, 버튼 터치 영역 등 반복적으로 테스트.

---

## 라우트/페이지 구성

- `/` : 메인(소개, 경력 하이라이트, 기술 스택, 경력 시각화 미리보기)
- `/skills` : 기술 스택(ReactFlow 기반 시각화)
- `/career-flow` : 경력 시각화(프로젝트-기술 네트워크)
- `/projects` : 프로젝트 포트폴리오
- `/experience` : 상세 경력 기술
- `/resume` : 이력서/경력 기술서
- `/contact` : 연락처, PDF 다운로드
