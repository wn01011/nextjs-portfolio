// 탭 컨테이너 스타일
export const tabsContainer = `
  mb-6
`;

// 탭 버튼 그룹 스타일
export const tabsButtonGroup = `
  flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700
`;

// 활성화된 탭 버튼 스타일
export const activeTabButton = `
  inline-block p-4 text-primary-600 border-b-2 border-primary-600 rounded-t-lg
  dark:text-primary-500 dark:border-primary-500 font-medium
`;

// 비활성화된 탭 버튼 스타일
export const inactiveTabButton = `
  inline-block p-4 border-b-2 border-transparent rounded-t-lg
  hover:text-gray-600 hover:border-gray-300
  dark:hover:text-gray-300 text-gray-500 dark:text-gray-400
`;

// 탭 패널 컨테이너 스타일
export const tabPanelContainer = `
  grid grid-cols-1 lg:grid-cols-12 gap-8
`;

// 탭 패널 왼쪽 컬럼 스타일
export const tabPanelLeftColumn = `
  lg:col-span-4
`;

// 탭 패널 오른쪽 컬럼 스타일
export const tabPanelRightColumn = `
  lg:col-span-8
`;

// 미디어 쿼리를 위한 모바일 탭 패널 스타일
export const mobileTabPanel = `
  lg:hidden
`;

// 특별한 카드 컨테이너 스타일
export const cardContainer = `
  bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6
  border-l-4 border-primary-500
`;

// 모바일 전용 단일 컬럼 탭 패널
export const singleColumnPanel = `
  col-span-12
`;

// 교육 카드 그리드 스타일
export const educationGrid = `
  grid grid-cols-1 lg:grid-cols-3 gap-4
`;

// 교육 카드 스타일
export const educationCard = `
  bg-white dark:bg-gray-800 rounded-lg shadow-md p-6
  border-t-4 border-primary-500 h-full
  transition-all duration-300 hover:shadow-lg
`;

// 교육 기관 스타일
export const educationInstitution = `
  text-sm text-primary-600 dark:text-primary-400 font-medium mb-1
`;

// 교육 과정 제목 스타일
export const educationTitle = `
  text-xl font-bold text-gray-800 dark:text-white mb-2
`;

// 교육 기간 스타일
export const educationPeriod = `
  text-sm text-gray-500 dark:text-gray-400 mb-3
`;

// 교육 설명 스타일
export const educationDescription = `
  text-gray-600 dark:text-gray-300 mb-3
`;

// 스킬 태그 컨테이너 스타일
export const skillsContainer = `
  flex flex-wrap gap-1 mb-3
`;

// 스킬 태그 스타일
export const skillTag = `
  text-xs bg-gray-200 dark:bg-gray-700
  text-gray-800 dark:text-gray-300
  px-2 py-1 rounded-full
`;
