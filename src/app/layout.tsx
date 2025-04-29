import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '프론트엔드 개발자 포트폴리오',
  description: 'Next.js, TypeScript, Tailwind CSS, ReactFlow로 만든 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}