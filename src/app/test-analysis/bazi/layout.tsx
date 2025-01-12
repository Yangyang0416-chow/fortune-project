import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '八字精算 - 个性化八字分析与运势预测',
  description: '通过出生年月日时和MBTI性格分析，为您提供专业的八字解读和运势预测服务。',
  keywords: '八字分析,生辰八字,命理分析,MBTI性格,运势预测,五行分析',
  openGraph: {
    title: '八字精算',
    description: '专业的八字分析与运势预测',
    type: 'website',
  },
};

export default function BaziLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 