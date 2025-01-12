# Fortune Project - 命理分析平台

基于 Next.js 14 开发的现代化命理分析平台，集成八字分析和风水咨询服务。

## 项目概述

Fortune Project 致力于将传统命理文化与现代技术相结合，为用户提供专业、科学的命理分析服务。

### 核心功能

- **八字精算**
  - 基于阳历/农历的八字计算
  - MBTI 性格分析整合
  - 五行属性分析
  - 个性化运势解读
  - 2025年运势预测

- **风水旺运**
  - 环境风水分析
  - 专业改善建议
  - 个性化布局方案

## 技术栈

- **前端框架**: Next.js 14
- **开发语言**: TypeScript
- **样式解决方案**: Tailwind CSS
- **日期处理**: lunar-typescript
- **状态管理**: React Hooks
- **UI组件**: 自定义组件

## 快速开始

1. **安装依赖**
```bash
npm install
```

2. **启动开发服务器**
```bash
npm run dev
```

3. **访问项目**
打开 [http://localhost:3000](http://localhost:3000) 查看项目运行效果

## 项目结构

```
fortune-project/
├── src/
│   ├── app/
│   │   ├── home/           # 首页模块
│   │   │   ├── components/ # 首页组件
│   │   │   └── README.md   # 首页文档
│   │   ├── test-analysis/  # 测试分析模块
│   │   │   ├── bazi/       # 八字分析
│   │   │   ├── fengshui/   # 风水分析
│   │   │   ├── components/ # 公共组件
│   │   │   ├── hooks/      # 自定义钩子
│   │   │   └── README.md   # 模块文档
│   │   ├── layout.tsx      # 全局布局
│   │   └── page.tsx        # 首页
│   └── styles/             # 全局样式
├── public/                 # 静态资源
├── README.md              # 项目说明
└── package.json           # 项目配置
```

## 开发指南

### 代码规范
- 使用 TypeScript 进行类型检查
- 遵循 ESLint 规则
- 使用 Prettier 进行代码格式化

### 提交规范
```bash
feat: 添加新功能
fix: 修复问题
docs: 修改文档
style: 修改样式
refactor: 代码重构
test: 添加测试
chore: 修改构建过程或辅助工具
```

## 部署

本项目使用 Vercel 进行部署，自动化部署流程：

1. 推送代码到 main 分支
2. Vercel 自动构建和部署
3. 自动更新生产环境

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 项目维护者: [Your Name]
- Email: [your.email@example.com]
- 项目链接: [https://github.com/your-username/fortune-project](https://github.com/your-username/fortune-project)

## 致谢

感谢所有为本项目做出贡献的开发者！
