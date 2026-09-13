---
title: 开发维护
icon: code
---

# 开发维护

## 目录职责

- `src/content/posts/`：文章 Markdown 和 frontmatter。
- `src/config/demigod.ts`：主题视觉、首页和服务配置。
- `src/data/blog.ts`：文章读取、排序和展示辅助数据。
- `src/pages/`：Astro 路由和页面入口。
- `src/components/`：粒子、评论、短代码和布局组件。
- `src/styles/global.css`：全局视觉和响应式样式。

## 推荐流程

1. 先修改配置或内容模型，再调整页面组件。
2. 保持背景、卡片和正文之间的层级关系。
3. 检查桌面、移动、无文章和评论关闭状态。
4. 执行 `npm run check` 与 `npm run build`。

不要编辑 `dist/` 构建产物，也不要把部署凭据提交到公开仓库。
