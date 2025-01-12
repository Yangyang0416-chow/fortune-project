import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '测试分析 - 八字精算与风水旺运',
  description: '提供专业的八字分析和风水咨询服务，帮助您更好地认识自己，优化生活环境。',
  keywords: '命理分析,八字精算,风水旺运,个人发展,生活优化',
  openGraph: {
    title: '测试分析',
    description: '专业的命理分析与咨询服务',
    type: 'website',
  },
};

export default function TestAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 