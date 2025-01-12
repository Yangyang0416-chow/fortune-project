import Link from "next/link";

export default function Features() {
  return (
    <div className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-white animate-fade-in">
          为什么选择我们的服务
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card text-center p-6 animate-fade-in delay-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">专业分析</h3>
            <p className="text-gray-600">
              基于传统命理学和现代心理学，提供专业的分析和建议
            </p>
          </div>

          <div className="feature-card text-center p-6 animate-fade-in delay-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">即时结果</h3>
            <p className="text-gray-600">
              快速生成分析报告，帮助您及时了解和改善现状
            </p>
          </div>

          <div className="feature-card text-center p-6 animate-fade-in delay-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg 
                className="w-6 h-6 text-purple-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">个性化建议</h3>
            <p className="text-gray-600">
              根据您的具体情况，提供量身定制的改善方案
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 