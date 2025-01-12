import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '命理分析 - 探索命理，优化人生',
  description: '专业的八字分析和风水咨询平台，提供个性化的命理解读和运势分析。',
  keywords: '八字,命理,风水,运势分析,MBTI,个人发展',
  openGraph: {
    title: '命理分析',
    description: '专业的命理分析平台',
    url: 'https://your-domain.com',
    siteName: 'Fortune Project',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto py-4 px-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                Fortune Project
              </Link>
              <div className="flex gap-6">
                <Link 
                  href="/test-analysis"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  测试分析
                </Link>
                <Link 
                  href="/docs"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  文档
                </Link>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
