"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/resume") return null;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-lg font-bold text-gray-800 dark:text-white"
            >
              김정규 소개 사이트입니다
            </Link>
            <p className="mt-2 text-sm">
              최근 관심있는 분야는 MCP 를 통한 생산성 향상이에요.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-gray-800 dark:text-white font-medium mb-2">
                링크
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    E-mail
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    프로젝트
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    연락처
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-800 dark:text-white font-medium mb-2">
                연락처
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:wn010111@gmail.com"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    wn010111@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/wn01011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    GitHub
                  </a>
                </li>
                <li>010-8506-7867</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© {currentYear} 김정규 All rights reserved.</p>
          <p className="mt-2">
            Made with MCP, Next.js, TypeScript, Tailwind CSS, and ReactFlow.
          </p>
        </div>
      </div>
    </footer>
  );
}
