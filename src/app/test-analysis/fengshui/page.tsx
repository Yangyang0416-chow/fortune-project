'use client';

import { useState } from 'react';
import { useFengShuiForm } from '../hooks/useFengShuiForm';
import { Navigation } from '@/app/test-analysis/components/Navigation';

export default function FengShuiPage() {
  const { formData, setFormData, handleSubmit } = useFengShuiForm();

  const [step, setStep] = useState(1);

  const locationTypes = [
    {
      id: 'whole-house',
      title: '房屋整栋位置风水',
      description: '分析房屋整体位置、外部环境与周边关系'
    },
    {
      id: 'interior',
      title: '屋内风水',
      description: '分析室内具体空间的风水布局'
    }
  ];

  const interiorLocations = [
    { id: 'living-room', label: '客厅' },
    { id: 'bedroom', label: '卧室' },
    { id: 'bathroom', label: '卫生间' },
    { id: 'kitchen', label: '厨房' }
  ];

  const directions = [
    '正北', '东北', '正东', '东南',
    '正南', '西南', '正西', '西北'
  ];

  const handleLocationTypeChange = (type: string) => {
    setFormData({
      ...formData,
      locationType: type,
      specificLocation: type === 'interior' ? 'living-room' : undefined
    });
    setStep(2);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        images: [...Array.from(e.target.files)]
      });
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        <h1 className="text-3xl font-bold mb-8">风水旺运分析</h1>

        <div className="space-y-8">
          {/* 步骤 1: 选择位置类型 */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">选择评估位置</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locationTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => handleLocationTypeChange(type.id)}
                    className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition text-left"
                  >
                    <h3 className="text-lg font-medium mb-2">{type.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 步骤 2: 具体位置、图片上传和方位选择 */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 具体位置选择（仅当选择屋内风水时显示） */}
              {formData.locationType === 'interior' && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    选择具体位置
                  </label>
                  <select
                    value={formData.specificLocation}
                    onChange={(e) => setFormData({
                      ...formData,
                      specificLocation: e.target.value
                    })}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                    required
                  >
                    {interiorLocations.map(location => (
                      <option key={location.id} value={location.id}>
                        {location.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* 图片上传 */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  上传环境图片（可多选）
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                  required
                />
                <p className="mt-1 text-sm text-gray-500">
                  请上传清晰的环境照片，以便我们进行更准确的分析
                </p>
              </div>

              {/* 方位选择 */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  选择朝向方位
                </label>
                <select
                  value={formData.direction}
                  onChange={(e) => setFormData({
                    ...formData,
                    direction: e.target.value
                  })}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                  required
                >
                  <option value="">请选择方位</option>
                  {directions.map(direction => (
                    <option key={direction} value={direction}>
                      {direction}
                    </option>
                  ))}
                </select>
              </div>

              {/* 个人信息 */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value
                  })}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  电子邮箱
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    email: e.target.value
                  })}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-background"
                  required
                />
              </div>

              {/* 提交按钮 */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  返回
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition"
                >
                  提交分析
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 