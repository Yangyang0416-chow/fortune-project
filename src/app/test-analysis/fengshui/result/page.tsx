'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/app/test-analysis/components/Navigation';
import Link from 'next/link';

interface FengShuiFormData {
  locationType: string;
  specificLocation?: string;
  images: string[];  // 存储图片URL
  direction: string;
  name: string;
  email: string;
}

export default function FengShuiResultPage() {
  const [formData, setFormData] = useState<FengShuiFormData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('fengShuiData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // 生成分析结果
  const generateAnalysis = (data: FengShuiFormData | null) => {
    if (!data) return '暂无数据';

    return `
      <strong>1. 整体环境分析：</strong>
      ${data.locationType === 'whole-house' ? '房屋整体位置风水' : `${data.specificLocation}风水`}分析结果如下：

      <strong>方位特点：</strong>
      您的房屋朝向为${data.direction}，这个方位在风水学中具有以下特点：
      • 阳气流通状况良好
      • 与周边环境的互动和谐
      • 整体格局稳定

      <strong>2. 具体空间分析：</strong>
      ${data.locationType === 'whole-house' ? `
      房屋外部环境：
      • 周边建筑布局合理
      • 自然采光充足
      • 空气流通顺畅
      ` : `
      ${data.specificLocation}空间布局：
      • 家具摆放位置合适
      • 空间利用率高
      • 整体氛围和谐
      `}

      <strong>3. 能量场评估：</strong>
      • 阳气充足程度：85%
      • 空间利用率：90%
      • 整体和谐度：88%

      <strong>4. 改善建议：</strong>
      
      <strong>短期改善方案：</strong>
      1. 调整布局：
         • 优化家具摆放位置
         • 增加绿色植物
         • 改善照明系统

      2. 环境优化：
         • 保持空气流通
         • 定期清洁整理
         • 适当增加装饰物

      <strong>长期规划建议：</strong>
      1. 空间改造：
         • 考虑局部装修调整
         • 优化收纳系统
         • 改善采光条件

      2. 能量场提升：
         • 选择合适的装饰品
         • 定期更新环境布置
         • 注意季节性调整

      <strong>5. 注意事项：</strong>
      • 避免在特定位置放置镜子
      • 保持空间整洁有序
      • 定期开窗通风
      • 注意光线平衡

      记住，风水是一个动态的系统，需要根据季节变化和个人需求进行适当调整。建议您定期检查和优化环境，保持良好的居住状态。
    `;
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        <h1 className="text-3xl font-bold mb-8">风水分析结果</h1>
        <div className="space-y-8">
          {/* 基本信息 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4">基本信息</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-medium">分析对象</div>
                <div className="mt-1 text-gray-600 dark:text-gray-300">
                  {formData?.locationType === 'whole-house' 
                    ? '房屋整体位置风水' 
                    : `${formData?.specificLocation}风水`}
                </div>
              </div>
              <div>
                <div className="font-medium">朝向</div>
                <div className="mt-1 text-gray-600 dark:text-gray-300">
                  {formData?.direction}
                </div>
              </div>
            </div>
          </div>

          {/* 环境图片 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4">环境图片</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {formData?.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800">
                  {/* 这里可以显示上传的图片 */}
                </div>
              ))}
            </div>
          </div>

          {/* 分析结果 */}
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4">详细分析</h2>
            <div className="space-y-4">
              <p 
                className="text-gray-600 dark:text-gray-300 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: generateAnalysis(formData) }}
              />
            </div>
          </div>

          {/* 返回按钮 */}
          <div className="flex justify-center mt-12">
            <Link
              href="/test-analysis/fengshui"
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
              <span>返回风水分析</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 