import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '风水旺运 - 专业风水环境分析',
  description: '上传您的居住或工作环境照片，获取专业的风水分析和个性化改善建议。',
  keywords: '风水分析,环境风水,旺运布局,风水改善,空间优化',
  openGraph: {
    title: '风水旺运',
    description: '专业的风水环境分析服务',
    type: 'website',
  },
};

export default function FengShuiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 