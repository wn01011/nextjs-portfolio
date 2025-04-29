'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 네비게이션 항목
  const navItems = [
    { name: '홈', path: '/' },
    { name: '자기소개', path: '/about' },
    { name: '경력기술서', path: '/resume' },
    { name: '프로젝트', path: '/projects' },
    { name: '기술 스택', path: '/skills' },
    { name: '연락처', path: '/contact' },
  ];
  
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            개발자 포트폴리오
          </Link>
          
          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors ${
                  pathname === item.path
                    ? 'text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        
        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition-colors ${
                    pathname === item.path
                      ? 'text-primary-600 dark:text-primary-400 font-medium'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}