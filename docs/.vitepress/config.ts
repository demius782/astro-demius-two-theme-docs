import type { DefaultTheme } from "vitepress";
import { defineConfig } from "vitepress";
import { teekConfig } from "./teek-config";

const siteUrl = "https://astrotwo.demius.tech";

const guideSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "开始使用",
    collapsed: false,
    items: [
      { text: "快速开始", link: "/guide/quick-start.html" },
      { text: "配置", link: "/guide/configuration.html" },
      { text: "功能指南", link: "/guide/features.html" },
    ],
  },
  {
    text: "功能与示例",
    collapsed: true,
    items: [
      { text: "认识 demigod", link: "/guide/introducing-demigod.html" },
      { text: "短代码展示", link: "/guide/shortcodes-showcase.html" },
      { text: "归档、分类与搜索", link: "/guide/archive-category-search.html" },
    ],
  },
  {
    text: "开发维护",
    collapsed: true,
    items: [
      { text: "开发维护", link: "/guide/development.html" },
    ],
  },
];

const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "完整资料",
    collapsed: false,
    items: [
      { text: "主题手册", link: "/reference/theme-manual.html" },
      { text: "开发日志", link: "/reference/notes.html" },
    ],
  },
];

const canonicalUrl = (relativePath: string) => {
  const pathname = relativePath
    .replace(/(^|\/)README\.md$/, "$1")
    .replace(/(^|\/)index\.md$/, "$1")
    .replace(/\.md$/, ".html");
  return `${siteUrl}/${pathname}`;
};

export default defineConfig({
  extends: teekConfig,
  base: "/",
  lang: "zh-CN",
  title: "demigod Astro 主题文档",
  description: "demigod Astro 沉浸式博客主题的使用与开发文档",
  cleanUrls: false,
  lastUpdated: true,
  rewrites: {
    "README.md": "index.md",
  },
  head: [
    ["meta", { name: "theme-color", content: "#b7791f" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh_CN" }],
    ["meta", { property: "og:site_name", content: "demigod Astro 主题文档" }],
    ["meta", { property: "og:image", content: `${siteUrl}/logo.svg` }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],
  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: siteUrl,
  },
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "demigod 文档",
    nav: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/guide/quick-start.html" },
      { text: "功能指南", link: "/guide/features.html" },
      { text: "开发维护", link: "/guide/development.html" },
      {
        text: "完整资料",
        items: [
          { text: "主题手册", link: "/reference/theme-manual.html" },
          { text: "开发日志", link: "/reference/notes.html" },
        ],
      },
      { text: "开发者博客", link: "https://blog.demius.tech/" },
    ],
    sidebar: {
      "/guide/": guideSidebar,
      "/reference/": referenceSidebar,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/demius782/astro-demius-two" },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
          modal: {
            noResultsText: "没有找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: { selectText: "选择", navigateText: "切换", closeText: "关闭" },
          },
        },
      },
    },
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新",
    outline: { level: [2, 3], label: "本页导航" },
    docFooter: { prev: "上一篇", next: "下一篇" },
    externalLinkIcon: true,
  },
  transformHead({ pageData }) {
    const url = canonicalUrl(pageData.relativePath);
    return [
      ["link", { rel: "canonical", href: url }],
      ["meta", { property: "og:url", content: url }],
    ];
  },
  transformPageData(pageData) {
    if (pageData.frontmatter.home !== true) return;

    const legacy = pageData.frontmatter;
    pageData.frontmatter.layout = "home";
    pageData.frontmatter.hero = {
      name: legacy.heroText,
      text: legacy.title,
      tagline: legacy.tagline,
      image: { src: legacy.heroImage, alt: legacy.heroText },
      actions: legacy.actions?.map((action: { text: string; link: string; type?: string }) => ({
        text: action.text,
        link: action.link,
        theme: action.type === "primary" ? "brand" : "alt",
      })),
    };
    pageData.frontmatter.features = legacy.features?.map(
      (feature: { title: string; details: string }) => ({
        title: feature.title,
        details: feature.details,
      }),
    );
  },
});
