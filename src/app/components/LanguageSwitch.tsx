'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-white/80 backdrop-blur-sm rounded-md px-3 py-1 text-sm border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="cn">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  );
} 