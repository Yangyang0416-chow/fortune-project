import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '八字分析结果 - Fortune Project',
  description: '您的八字分析结果',
};

export default function BaziResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 