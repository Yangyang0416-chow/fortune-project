export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          © 2024 Fortune Project. All rights reserved.
        </div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a
            href="/docs"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            文档
          </a>
          <a
            href="/about"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            关于
          </a>
          <a
            href="https://github.com/your-repo"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
} 