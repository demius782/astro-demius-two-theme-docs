---
title: "短代码完整效果预览"
excerpt: "集中展示 demigod 已支持的提示块、折叠、标签页、时间线、按钮、媒体、链接卡片和隐藏内容等短代码效果。"
category: "短代码"
date: 2026-07-14
readTime: "10 分钟"
comments: 0
tags: ["Shortcode", "Markdown", "示例"]
accentA: "#f4c86a"
accentB: "#9ee8d1"
featured: true
carousel: true
slug: "shortcodes-showcase"
---

这篇文章用于检查当前主题已经实现的短代码效果。短代码支持 Hugo / Typecho Handsome 风格的 `{{< name attr="value" >}}` 写法，也支持部分 `:::` 容器写法。

## 提示块

{{< note title="Note 提示" >}}
这是 `note` 短代码，适合放普通说明。
{{< /note >}}

{{< info title="Info 信息" >}}
这是 `info` 短代码，适合放补充信息。
{{< /info >}}

{{< tip title="Tip 建议" >}}
这是 `tip` 短代码，适合放推荐做法。
{{< /tip >}}

{{< success title="Success 成功" >}}
这是 `success` 短代码，适合放完成状态。
{{< /success >}}

{{< warning title="Warning 警告" >}}
这是 `warning` 短代码，适合放需要注意的内容。
{{< /warning >}}

{{< danger title="Danger 危险" >}}
这是 `danger` 短代码，适合放高风险提示。
{{< /danger >}}

{{< alert type="info" title="Alert 别名" >}}
`alert` 可以通过 `type` 指定提示类型。
{{< /alert >}}

{{< callout type="warning" title="Callout 别名" >}}
`callout` 也是提示块写法之一。
{{< /callout >}}

::: tip title="Directive 写法"
这是 `:::` 指令容器写法。
:::

## 折叠、卡片和隐藏内容

{{< collapse title="Collapse 折叠块" open="true" >}}
这是默认展开的折叠块。

- 可以包含列表
- 可以包含普通 Markdown
{{< /collapse >}}

{{< details title="Details 别名" >}}
`details` 与 `collapse` 等价。
{{< /details >}}

{{< box title="Box 内容盒子" type="primary" >}}
这是 `box` 容器。
{{< /box >}}

{{< card title="Card 别名" tone="info" >}}
`card` 与 `box` 等价。
{{< /card >}}

{{< quote author="demigod" >}}
这是 `quote` 引用容器，可带作者。
{{< /quote >}}

{{< secret title="Secret 隐藏内容" >}}
静态站点里会以折叠块形式展示隐藏内容。
{{< /secret >}}

{{< encrypt title="Encrypt 别名" >}}
`encrypt` 使用同一套隐藏内容样式。
{{< /encrypt >}}

{{< reply-visible title="Reply Visible 别名" >}}
旧博客的评论后可见内容，在静态站点里会降级为折叠展示。
{{< /reply-visible >}}

## 标签页

{{< tabs tabs="概览,参数,结果" default="2" >}}
{{< tab title="概览" index="1" >}}
第一个标签页内容。
{{< /tab >}}
{{< tab title="参数" index="2" >}}
第二个标签页内容，默认选中。
{{< /tab >}}
{{< tab title="结果" index="3" >}}
第三个标签页内容。
{{< /tab >}}
{{< /tabs >}}

## 时间线

{{< timeline >}}
{{< timeline-item date="2026-07-01" title="开始迁移" type="info" >}}
整理旧文章和主题功能。
{{< /timeline-item >}}
{{< timeline-item date="2026-07-14" title="短代码完成" type="success" >}}
短代码转换、运行时和样式接入完成。
{{< /timeline-item >}}
{{< /timeline >}}

## 行内短代码

这是一段普通文本，里面有 {{< badge text="Badge" color="primary" >}}，也有 {{< color red >}}红色文字{{< /color >}}。

{{< button href="https://astro.build" text="访问 Astro" type="primary" icon="↗" >}}

{{< btn href="/" text="回到首页" type="light" outline="true" >}}

{{< button href="https://example.com" text="块级按钮" type="success" block="true" size="large" >}}

## 链接卡片

{{< linkcard href="https://astro.build" title="Astro" desc="适合内容站点的 Web 框架" site="astro.build" image="/img/demigod/hero-cloudscape.jpg" >}}

{{< link href="https://docs.astro.build" title="Astro Docs" desc="Astro 官方文档" >}}

{{< download href="/favicon.svg" title="下载 favicon.svg" desc="本地静态资源示例" site="SVG 文件" >}}

{{< netdisk href="https://example.com" title="网盘资源示例" code="abcd" site="Netdisk" >}}

{{< github repo="withastro/astro" desc="Astro GitHub repository" >}}

{{< douban id="26912767" type="book" title="豆瓣条目示例" author="作者名" rating="8.8" >}}

{{< douyin href="https://www.douyin.com" title="抖音外链示例" >}}

## 图片和相册

{{< image src="/img/demigod/hero-cloudscape.jpg" title="Image 图片短代码" alt="云层背景" >}}

{{< picture src="/img/demigod/hero-cloudscape.jpg" caption="Picture 别名示例" alt="云层背景" >}}

{{< livephoto src="/img/demigod/hero-cloudscape.jpg" video="/img/demigod/sy.mp4" caption="鼠标悬停时播放视频的 LivePhoto 示例" >}}

{{< gallery images="/img/demigod/hero-cloudscape.jpg,/img/demigod/hero-cloudscape.jpg,/img/demigod/hero-cloudscape.jpg" captions="第一张|第二张|第三张" title="Gallery 相册" >}}

## 视频和嵌入

{{< video src="/img/demigod/sy.mp4" title="本地视频示例" controls="true" muted="true" poster="/img/demigod/hero-cloudscape.jpg" >}}

{{< bilibili bvid="BV1xx411c7mD" title="Bilibili 示例" >}}

{{< youtube id="dQw4w9WgXcQ" title="YouTube 示例" >}}

{{< iframe src="https://example.com" title="Iframe 示例" ratio="16:9" >}}

{{< embed src="https://example.com" title="Embed 示例" height="360" >}}

{{< video src="https://www.bilibili.com/video/BV1xx411c7mD" >}}

## 音频和音乐

{{< audio src="/audio/demo.mp3" title="本地音频示例" artist="demigod" cover="/img/demigod/hero-cloudscape.jpg" >}}

{{< music src="/audio/demo.mp3" title="Music 本地音频" artist="demigod" cover="/img/demigod/hero-cloudscape.jpg" >}}

{{< aplayer src="/audio/demo.mp3" title="APlayer 别名" artist="demigod" >}}

{{< netease id="1901371647" type="song" title="网易云 Meting 示例" >}}

{{< music163 id="1901371647" type="song" title="music163 别名" >}}

## 更多兼容别名

{{< accordion title="Accordion 折叠别名" >}}
`accordion` 会被归一化为 `collapse`。
{{< /accordion >}}

{{< hide title="Hide 隐藏别名" >}}
`hide` 会被归一化为 `secret`。
{{< /hide >}}

{{< warn title="Warn 警告别名" >}}
`warn` 会被归一化为 `warning`。
{{< /warn >}}

{{< notice title="Notice 提示别名" >}}
`notice` 会被归一化为 `note`。
{{< /notice >}}
