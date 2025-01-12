# Fortune Project 设计文档

## 项目概述

这是一个基于 Next.js 15 的现代化 Web 应用项目,采用 App Router 架构,使用 TypeScript 进行开发。

## 目录结构 
├── src/ # 源代码目录
│ ├── app/ # Next.js App Router 目录
│ │ ├── layout.tsx # 根布局组件
│ │ ├── page.tsx # 首页组件
│ │ └── globals.css # 全局样式
│ ├── components/ # 共享组件
│ └── types/ # TypeScript 类型定义
├── public/ # 静态资源目录
├── .next/ # Next.js 构建输出(已忽略)
└── 配置文件
├── package.json # 项目依赖配置
├── tsconfig.json # TypeScript 配置
├── next.config.ts # Next.js 配置
├── tailwind.config.ts # Tailwind 配置
├── postcss.config.mjs # PostCSS 配置
├── eslint.config.mjs # ESLint 配置
└── .gitignore # Git 忽略配置

## 当前首页实现
目前首页实现在 src/app/page.tsx 中,使用了:
- Tailwind CSS 进行样式管理
- Next.js Image 组件处理图片
- 响应式设计(sm 断点)
- 暗色模式支持

## 设计讨论
> 这里将记录我们关于首页设计的讨论内容。

## 组件说明
> 这里将记录首页各个组件的具体说明。