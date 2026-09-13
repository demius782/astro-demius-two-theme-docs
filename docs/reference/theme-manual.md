# demigod 主题使用说明

demigod 是一个单页沉浸式 Astro 博客主题。首页包含顶部导航、中央阅读区、右侧文章卡片、底部文章轮播、搜索弹窗、作者信息、阅读进度、Artalk 评论和粒子背景。

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run preview
```

开发预览默认使用 Astro dev server。当前项目常用本地地址：

```text
http://localhost:4322/
```

## 创建新文章

一键创建文章：

```bash
npm run new:post -- "我的第一篇文章"
```

带分类、摘要和阅读时长：

```bash
npm run new:post -- "我的第一篇文章" --category 随笔 --excerpt "这是一段文章摘要" --read-time "5 分钟"
```

同时加入底部轮播：

```bash
npm run new:post -- "我的第一篇文章" --category 随笔 --carousel
```

脚本会在 [src/content/posts](../src/content/posts) 中创建一篇 Markdown 文章。所有文章都放在这个目录里，页面会通过 Astro 内容集合自动读取。

文章 frontmatter 中常用字段：

```yaml
title: "文章标题"
excerpt: "文章摘要"
category: "随笔"
date: 2026-07-14
readTime: "5 分钟"
tags: ["Astro", "博客"]
featured: true
carousel: false
```

`featured: true` 会让文章进入右侧文章卡片；`carousel: true` 会让文章进入底部轮播。两者都来自同一个文章目录，不再维护单独的文章数组。

## 主题配置

主题功能集中在 [src/config/demigod.ts](../src/config/demigod.ts)。

可配置内容包括：

- `background`：首页全屏背景图/GIF/视频、背景定位、尺寸和缩放
- `particles`：粒子特效开关、数量、速度、颜色、鼠标避让
- `articleCards`：右侧文章卡片开关和显示数量
- `comments`：Artalk 评论系统开关、服务端地址、站点名
- `author`：右上角作者信息按钮和中间作者简介
- `siteInfo`：建站时间、ICP备案、公安备案、版权和底部链接

## 更换背景图

默认背景图路径：

```text
public/img/demigod/hero-cloudscape.jpg
```

推荐把新图片放到 `public/img/demigod/`，再修改：

```ts
background: {
  image: '/img/demigod/your-image.jpg',
  position: 'center',
  size: 'cover',
  scale: 1.035
}
```

也可以直接使用外部图片链接：

```ts
background: {
  image: 'https://example.com/images/your-background.jpg',
  position: 'center',
  size: 'cover',
  scale: 1.035
}
```

GIF 动图也使用同一个字段：

```ts
background: {
  image: '/img/demigod/animated-background.gif',
  position: 'center',
  size: 'cover',
  scale: 1.035
}
```

外部 GIF 链接同样支持：

```ts
background: {
  image: 'https://example.com/images/animated-background.gif',
  position: 'center',
  size: 'cover',
  scale: 1.035
}
```

视频背景需要把 `type` 改为 `video`，`video` 可以使用本地路径或外部链接：

```ts
background: {
  type: 'video',
  image: '/img/demigod/hero-cloudscape.jpg',
  video: '/video/demigod-background.mp4',
  poster: '/img/demigod/hero-cloudscape.jpg',
  videoFit: 'cover',
  position: 'center',
  size: 'cover',
  scale: 1.035
}
```

外部 MP4/WebM 链接同样支持：

```ts
background: {
  type: 'video',
  image: '/img/demigod/hero-cloudscape.jpg',
  video: 'https://example.com/video/background.webm',
  poster: '/img/demigod/hero-cloudscape.jpg',
  videoFit: 'cover',
  position: 'center',
  size: 'cover',
  scale: 1.035
}
```

视频背景会自动静音、循环、内联播放。浏览器通常要求静音视频才能自动播放，建议同时保留 `poster` 和 `image` 作为加载前的兜底画面。

## Artalk 评论

评论配置在 `themeConfig.comments`：

```ts
comments: {
  enabled: true,
  provider: 'artalk',
  server: 'https://artalk.example.com',
  site: 'demigod',
  placeholder: '填写 Artalk 服务端地址后启用评论'
}
```

没有填写 `server` 时，文章底部会显示配置提示，不会中断页面。

## 上传服务器

复制部署配置示例：

```powershell
Copy-Item .env.deploy.example .env.deploy
```

填写 `.env.deploy`：

```text
DEPLOY_HOST=example.com
DEPLOY_PORT=22
DEPLOY_USER=root
DEPLOY_REMOTE_DIR=/var/www/demigod
DEPLOY_IDENTITY_FILE=C:/Users/your-name/.ssh/id_ed25519
```

先做 dry run：

```bash
npm run deploy:dry
```

构建并上传：

```bash
npm run deploy:build
```

只上传现有 `dist`：

```bash
npm run deploy
```

如果远端没有 rsync，可以尝试：

```bash
npm run deploy:setup-remote
```

部署脚本需要本机有 OpenSSH 和 rsync。Windows 可使用 MSYS2、Cygwin 或 cwRsync，并可在 `.env.deploy` 里填写 `DEPLOY_RSYNC_PATH`。

## Git 和隐私

仓库会忽略：

- `.env`、`.env.*`、`.env.deploy`
- SSH 私钥、证书、签名密钥
- `node_modules/`
- `dist/`
- `.astro/`
- 本地 dev server 日志和 PID
- `artifacts/`

可以提交 `.env.deploy.example`，不要提交真实 `.env.deploy`。
