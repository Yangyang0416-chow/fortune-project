'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/app/test-analysis/components/Navigation';
import Link from 'next/link';

interface BaziFormData {
  year: string;
  month: string;
  day: string;
  time: string;
  mbti: string;
}

export default function Fortune2025Page() {
  const [baziData, setBaziData] = useState<BaziFormData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('baziData');
    if (savedData) {
      setBaziData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        <h1 className="text-3xl font-bold mb-8">2025年运势分析</h1>
        <div className="space-y-8">
          {/* 财富发展分析 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white mr-3">
                1
              </span>
              财富发展分析
            </h2>
            <div className="space-y-4">
              <div className="pl-11">
                <h3 className="font-medium mb-2">整体财运</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  2025年您的财运整体向好，尤其在{baziData?.month}月前后会出现重要的理财机会。建议：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>上半年适合稳健投资，可以考虑固定收益类产品</li>
                  <li>下半年可以适当增加一些风险投资的比例</li>
                  <li>注意避开每月初的重大财务决策</li>
                </ul>
              </div>
              <div className="pl-11">
                <h3 className="font-medium mb-2">理财建议</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  根据您的八字特点，建议：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>合理配置资产，保持30%流动性</li>
                  <li>可以关注新能源和科技领域的投资机会</li>
                  <li>避免过度投机，保持理性判断</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 感情缘分指引 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white mr-3">
                2
              </span>
              感情缘分指引
            </h2>
            <div className="space-y-4">
              <div className="pl-11">
                <h3 className="font-medium mb-2">感情运势</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  2025年您的感情生活将会有新的突破，特别是在春季和秋季。建议：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>保持开放和真诚的心态</li>
                  <li>多参加社交活动，扩展社交圈</li>
                  <li>注意倾听和表达自己的感受</li>
                </ul>
              </div>
              <div className="pl-11">
                <h3 className="font-medium mb-2">桃花位</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  您的桃花位在东南方向，建议：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>可以适当在东南方向增加一些粉色装饰</li>
                  <li>外出或旅行时可以选择东南方向</li>
                  <li>注意避免在西北方向进行重要的感情决策</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 事业发展分析 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                3
              </span>
              事业发展分析
            </h2>
            <div className="space-y-4">
              <div className="pl-11">
                <h3 className="font-medium mb-2">事业运势</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  2025年您的事业发展机会较多，尤其在以下方面：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>领导力提升的机会将会增多</li>
                  <li>适合尝试新的职业方向</li>
                  <li>团队合作会带来意外收获</li>
                </ul>
              </div>
              <div className="pl-11">
                <h3 className="font-medium mb-2">发展建议</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  根据您的八字特点，建议：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>主动把握{baziData?.month}月前后的升职机会</li>
                  <li>注重人脉积累和团队协作</li>
                  <li>可以考虑参加进修或培训课程</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 健康风险分析 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                4
              </span>
              健康风险分析
            </h2>
            <div className="space-y-4">
              <div className="pl-11">
                <h3 className="font-medium mb-2">健康状况</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  2025年需要特别注意以下健康方面的问题：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>春季注意呼吸系统的保养</li>
                  <li>夏季需要注意心脑血管健康</li>
                  <li>秋冬季节注意免疫力的调节</li>
                </ul>
              </div>
              <div className="pl-11">
                <h3 className="font-medium mb-2">养生建议</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  根据您的体质特点，建议：
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>保持规律的作息时间</li>
                  <li>适当进行有氧运动</li>
                  <li>注意饮食均衡，避免过度劳累</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 返回按钮 */}
          <div className="flex justify-center mt-12">
            <Link
              href="/test-analysis/bazi/result"
              className="px-6 py-3 bg-foreground text-background rounded-md hover:bg-opacity-90 transition flex items-center space-x-2"
            >
              <svg 
                className="w-5 h-5 rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
              <span>返回分析结果</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 