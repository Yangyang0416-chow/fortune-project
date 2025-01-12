'use client';

import { useState } from 'react';
import { useFengShuiForm } from '../hooks/useFengShuiForm';
import { Navigation } from '@/app/test-analysis/components/Navigation';

export default function FengShuiAnalysisPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Navigation />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card">
            <h2 className="text-xl font-semibold mb-4">房屋整栋位置风水</h2>
            {/* ... 其他内容 ... */}
          </div>
          <div className="feature-card">
            <h2 className="text-xl font-semibold mb-4">屋内风水</h2>
            {/* ... 其他内容 ... */}
          </div>
        </div>
      </div>
    </div>
  );
} 