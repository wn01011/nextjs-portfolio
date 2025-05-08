'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Image from "next/image";
import { getImageSrc } from "@/utils/getImageSrc";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 다크모드 감지
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    // 다크모드 변경 감지
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // 다크모드 토글
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  // 네비게이션 항목 (토룩 경험에 맞게 수정)
  const navItems = [
    { name: "홈", path: "/" },
    { name: "경력", path: "/experience" },
    { name: "프로젝트", path: "/projects" },
    { name: "시각화", path: "/career-flow" },
    { name: "기술 스택", path: "/skills" },
    { name: "연락처", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* 로고: 동그란 프로필 이미지 버튼 */}
          <Link href="/" className="block">
            <Image
              src={getImageSrc("/profile.jpeg")}
              alt="홈으로 이동"
              width={44}
              height={44}
              className="rounded-full border-2 border-primary-500 shadow-sm hover:scale-105 transition-transform bg-white object-cover aspect-square rotate-45"
              priority
            />
          </Link>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors ${
                  pathname === item.path
                    ? "text-primary-500 dark:text-primary-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 모바일 뷰 컨트롤 */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* 모바일 메뉴 버튼 */}
            <button
              className="text-gray-600 dark:text-gray-300 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition-colors ${
                    pathname === item.path
                      ? "text-primary-500 dark:text-primary-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
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