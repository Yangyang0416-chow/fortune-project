'use client';

import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="mb-8">
      <Link
        href="/"
        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← 返回首页
      </Link>
    </nav>
  );
}; 