'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="mb-8">
      <Link 
        href="/test-analysis"
        className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        ← 返回测试分析
      </Link>
    </nav>
  );
} 