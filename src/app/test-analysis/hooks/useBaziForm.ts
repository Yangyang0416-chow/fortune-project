'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export interface BaziFormData {
  year: string;
  month: string;
  day: string;
  time: string;
  mbti: string;
}

// 使用localStorage保存数据
const saveBaziData = (data: BaziFormData) => {
  localStorage.setItem('baziData', JSON.stringify(data));
};

export function useBaziForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<BaziFormData>({
    year: '2024',
    month: '1',
    day: '1',
    time: '子时',
    mbti: 'INTJ',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // 保存数据
    saveBaziData(formData);
    
    // 跳转到结果页面
    router.push('/test-analysis/bazi/result');
  };

  return {
    formData,
    setFormData,
    handleSubmit,
  };
} 