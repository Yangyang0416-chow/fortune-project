import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
