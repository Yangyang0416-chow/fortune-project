import Link from "next/link";

export default function Features() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            href="/test-analysis/bazi"
            className="feature-card"
          >
            <h2 className="text-2xl font-medium mb-3">八字精算</h2>
            <p className="text-gray-600">
              通过八字分析您的性格特点、事业发展、人际关系等方面的特质。
            </p>
          </Link>

          <Link 
            href="/test-analysis/fengshui"
            className="feature-card"
          >
            <h2 className="text-2xl font-medium mb-3">风水旺运</h2>
            <p className="text-gray-600">
              分析居住环境的风水特点，提供改善建议以增进运势。
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
} 