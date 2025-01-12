'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export interface FengShuiFormData {
  locationType: string;
  specificLocation?: string;
  images: File[];
  direction: string;
  name: string;
  email: string;
}

export function useFengShuiForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FengShuiFormData>({
    locationType: '',
    specificLocation: '',
    images: [],
    direction: '',
    name: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 这里可以添加实际的表单提交逻辑
      // 例如：上传图片到服务器，获取URL等

      // 暂时模拟图片URL
      const imageUrls = formData.images.map((_, index) => `image-${index}.jpg`);

      // 保存数据到localStorage
      localStorage.setItem('fengShuiData', JSON.stringify({
        ...formData,
        images: imageUrls
      }));

      // 跳转到结果页面
      router.push('/test-analysis/fengshui/result');
    } catch (error) {
      console.error('提交表单时出错:', error);
      // 这里可以添加错误处理逻辑
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit
  };
} 