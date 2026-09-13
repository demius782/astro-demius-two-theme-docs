import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  bundler: viteBundler({ vuePluginOptions: { template: { compilerOptions: { delimiters: ["[[", "]]"], } } } }),
  base: "/",
  lang: "zh-CN",
  title: "demigod Astro 主题文档",
  description: "demigod Astro 沉浸式博客主题的使用与开发文档",
  head: [["link", { rel: "canonical", href: "https://astrotwo.demius.tech/" }]],
  theme: hopeTheme({
    hostname: "https://astrotwo.demius.tech",
    logo: "/logo.svg",
    repo: "demius782/astro-demius-two",
    docsDir: "docs",
    navbar: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/guide/quick-start.html" },
      { text: "功能指南", link: "/guide/features.html" },
      { text: "开发维护", link: "/guide/development.html" },
      { text: "完整资料", children: [{ text: "主题手册", link: "/reference/theme-manual.html" }, { text: "开发日志", link: "/reference/notes.html" }] },
      { text: "开发者博客", link: "https://blog.demius.tech/", target: "_blank" },
    ],
    sidebar: {
      "/guide/": [
        { text: "开始使用", icon: "rocket", collapsible: false, children: ["quick-start", "configuration", "features"] },
        { text: "功能与示例", icon: "puzzle-piece", collapsible: true, children: ["introducing-demigod", "shortcodes-showcase", "archive-category-search"] },
        { text: "开发维护", icon: "code", collapsible: true, children: ["development"] },
      ],
      "/reference/": [{ text: "完整资料", icon: "book", collapsible: false, children: ["theme-manual", "notes"] }],
      "/": [""],
    },
    locales: { "/": { lang: "zh-CN", title: "demigod Astro 主题文档", description: "demigod Astro 主题文档" } },
    darkmode: true,
    toc: { level: [2, 3] },
    breadcrumb: true,
    lastUpdated: true,
    contributors: false,
    editLink: false,
    footer: "demigod Astro 主题文档",
    copyright: "Copyright © 2026 Demius contributors",
  }),
});
