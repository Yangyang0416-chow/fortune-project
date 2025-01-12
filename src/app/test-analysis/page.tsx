import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '测试分析 - Fortune Project',
  description: '八字解读与风水点评分析工具',
};

export default function TestAnalysisPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">测试分析</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 八字精算 */}
          <a 
            href="/test-analysis/bazi"
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition"
          >
            <h2 className="text-xl font-semibold mb-2">八字精算</h2>
            <p className="text-gray-600 dark:text-gray-300">
              通过八字分析您的性格特点、事业发展、人际关系等方面的特质。
            </p>
          </a>

          {/* 风水旺运 */}
          <a 
            href="/test-analysis/fengshui"
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition"
          >
            <h2 className="text-xl font-semibold mb-2">风水旺运</h2>
            <p className="text-gray-600 dark:text-gray-300">
              分析居住环境的风水特点，提供改善建议以增进运势。
            </p>
          </a>
        </div>
      </div>
    </div>
  );
} 