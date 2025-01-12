export default function Features() {
  const features = [
    {
      title: "现代技术栈",
      description: "采用 Next.js 15、TypeScript、Tailwind CSS 等最新技术",
    },
    {
      title: "响应式设计",
      description: "完美适配从移动端到桌面端的各种设备尺寸",
    },
    {
      title: "深色模式",
      description: "内置优雅的深色模式支持,提供出色的用户体验",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 