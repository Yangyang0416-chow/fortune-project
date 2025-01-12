'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="py-20 relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            神秘东方风水：带你开启命运探索之旅
          </h1>
          <p className="text-xl text-gray-200 mb-12 animate-fade-in delay-100">
            探索神秘东方智慧，风水大师解锁专属命运密码
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            href="/test-analysis/bazi"
            className="feature-card group hover:bg-white/90 animate-fade-in delay-200"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg 
                  className="w-6 h-6 text-blue-600" 
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
              <h2 className="text-2xl font-semibold text-gray-800">八字精算</h2>
            </div>
            <p className="text-gray-600">
              深入分析您的八字命盘，揭示性格特质与人生机遇。
            </p>
          </Link>

          <Link 
            href="/test-analysis/fengshui"
            className="feature-card group hover:bg-white/90 animate-fade-in delay-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg 
                  className="w-6 h-6 text-green-600" 
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
              <h2 className="text-2xl font-semibold text-gray-800">风水旺运</h2>
            </div>
            <p className="text-gray-600">
              专业的风水环境分析，助您打造顺心如意的生活空间。
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
} 