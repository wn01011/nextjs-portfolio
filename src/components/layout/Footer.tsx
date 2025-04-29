import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-lg font-bold text-gray-800 dark:text-white">
              개발자 포트폴리오
            </Link>
            <p className="mt-2 text-sm">
              프론트엔드 개발자의 포트폴리오 웹사이트입니다.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-gray-800 dark:text-white font-medium mb-2">링크</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-primary-600 dark:hover:text-primary-400">
                    자기소개
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-primary-600 dark:hover:text-primary-400">
                    프로젝트
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400">
                    연락처
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-800 dark:text-white font-medium mb-2">연락처</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:example@mail.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                    example@mail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© {currentYear} 개발자 포트폴리오. All rights reserved.</p>
          <p className="mt-2">
            Made with Next.js, TypeScript, Tailwind CSS, and ReactFlow.
          </p>
        </div>
      </div>
    </footer>
  );
}