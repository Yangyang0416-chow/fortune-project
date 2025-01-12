export default function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center animate-fade-in">
          <div className="text-gray-300 text-sm mb-4">
            © 2024 Fortune Project. All rights reserved.
          </div>
          <div className="text-gray-400 text-xs">
            本网站仅供娱乐参考，不构成任何专业建议
          </div>
        </div>
      </div>
    </footer>
  );
} 