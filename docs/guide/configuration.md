---
title: 配置入口
icon: sliders
---

# 配置入口

主题功能集中在 `src/config/demigod.ts`，站点内容在 `src/data/blog.ts`，文章由 `src/content/posts/` 自动读取。

## 常用模块

- `background`：背景图片、GIF、视频、定位、尺寸和缩放。
- `particles`：粒子数量、速度、颜色、鼠标避让和开关。
- `articleCards`：右侧精选文章卡片和显示数量。
- `comments`：Artalk 服务端地址、站点名和开关。
- `author`：右上角作者按钮和中央作者简介。
- `siteInfo`：建站时间、备案信息、版权和底部链接。

## 更换背景

把资源放到 `public/img/demigod/`，再修改：

```ts
background: {
  image: '/img/demigod/your-image.jpg',
  position: 'center',
  size: 'cover',
  scale: 1.035,
}
```

外部图片、GIF 和视频也遵循同一配置入口。生产部署前请执行 `npm run build` 检查资源路径。
