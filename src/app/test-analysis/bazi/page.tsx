'use client';

import { Navigation } from '@/app/test-analysis/components/Navigation';
import { useBaziForm, BaziFormData } from '../hooks/useBaziForm';

export default function BaZiAnalysisPage() {
  const { formData, setFormData, handleSubmit } = useBaziForm();

  const mbtiTypes = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
  ];

  const handleMbtiChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      mbti: value
    }));
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        <h1 className="text-3xl font-bold mb-8">八字解读</h1>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* 生年 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                出生年份（阳历/公历）
              </label>
              <select 
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                required
              >
                {Array.from({ length: 100 }, (_, i) => 2024 - i).map(year => (
                  <option key={year} value={year}>{year}年</option>
                ))}
              </select>
            </div>

            {/* 生月 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                出生月份（阳历/公历）
              </label>
              <select 
                value={formData.month}
                onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                required
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                  <option key={month} value={month}>{month}月</option>
                ))}
              </select>
            </div>

            {/* 生日 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                出生日期（阳历/公历）
              </label>
              <select 
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                required
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                  <option key={day} value={day}>{day}日</option>
                ))}
              </select>
            </div>

            {/* 生时 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                出生时辰
              </label>
              <select 
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                required
              >
                {[
                  '子时 (23:00-1:00)',
                  '丑时 (1:00-3:00)',
                  '寅时 (3:00-5:00)',
                  '卯时 (5:00-7:00)',
                  '辰时 (7:00-9:00)',
                  '巳时 (9:00-11:00)',
                  '午时 (11:00-13:00)',
                  '未时 (13:00-15:00)',
                  '申时 (15:00-17:00)',
                  '酉时 (17:00-19:00)',
                  '戌时 (19:00-21:00)',
                  '亥时 (21:00-23:00)',
                ].map(time => (
                  <option key={time} value={time.split(' ')[0]}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* MBTI类型选择 */}
            <div>
              <label className="block text-sm font-medium mb-2">
                MBTI性格类型
              </label>
              <select 
                value={formData.mbti}
                onChange={(e) => handleMbtiChange(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                required
              >
                {mbtiTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <p className="mt-1 text-sm text-gray-500">
                如果您不知道自己的MBTI类型，可以
                <a 
                  href="https://www.16personalities.com/ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  点击这里测试
                </a>
              </p>
            </div>

            {/* 提交按钮 */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-foreground text-background rounded-md hover:bg-opacity-90 transition"
            >
              开始分析
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 