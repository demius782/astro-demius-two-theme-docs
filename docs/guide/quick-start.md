---
title: 快速开始
icon: rocket
---

# 快速开始

demigod 是一个单页沉浸式 Astro 博客主题，首页把背景、中央阅读区、文章卡片和推荐轮播组织在同一个场景中。

## 安装与启动

```bash
npm install
npm run dev
```

开发服务器默认使用 `http://localhost:4322/`，具体端口以终端输出为准。

## 构建和预览

```bash
npm run build
npm run preview
```

## 创建文章

```bash
npm run new:post -- "我的第一篇文章" --category "随笔" --excerpt "文章摘要" --read-time "5 分钟" --tags "Astro,博客"
```

文章位于 `src/content/posts/`，推荐字段：

```yaml
title: "文章标题"
excerpt: "文章摘要"
category: "随笔"
date: 2026-07-14
readTime: "5 分钟"
tags: [Astro, 博客]
featured: true
carousel: false
```

下一步阅读[配置入口](configuration.html)和[功能指南](features.html)。
