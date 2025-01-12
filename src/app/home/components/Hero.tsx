'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          探索命理，优化人生
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          通过专业的命理分析，帮助您更好地认识自己，规划未来
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/test-analysis/bazi"
            className="p-6 rounded-lg bg-card hover:bg-card/80 transition-all transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <svg 
                  className="w-6 h-6 text-blue-600 dark:text-blue-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">八字精算</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              深入分析您的八字命盘，揭示性格特质与人生机遇。
            </p>
          </Link>

          <Link 
            href="/test-analysis/fengshui"
            className="p-6 rounded-lg bg-card hover:bg-card/80 transition-all transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                <svg 
                  className="w-6 h-6 text-green-600 dark:text-green-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">风水旺运</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              专业的风水环境分析，助您打造顺心如意的生活空间。
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
} 