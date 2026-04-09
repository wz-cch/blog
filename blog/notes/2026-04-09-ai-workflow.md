---
slug: ai-blog-workflow
title: "用 AI 管我的技術部落格：Docusaurus + GitHub Actions + AI 工作流"
date: 2026-04-09
authors: wz-cch
tags: [工具試用, GitHub範例, AI應用]
---

這篇探索筆記記錄我怎麼用 Docusaurus v3 建這個部落格，以及把 AI 整進寫作流程的方法。

<!-- truncate -->

## 技術選型

| 項目 | 選擇 | 理由 |
|------|------|------|
| 框架 | Docusaurus v3 | TypeScript 支援佳，MDX，SEO 友善 |
| 部署 | GitHub Pages | 免費，搭配 Actions 零維運 |
| 自動化 | GitHub Actions | push main 即自動部署 |
| 主題 | classic + 自訂 CSS | 不想依賴第三方主題套件 |

## 專案結構

```
blog/
├── blog/
│   ├── tech/       # 技術文章
│   ├── notes/      # 探索筆記
│   └── life/       # 閒聊
├── src/
│   ├── pages/      # 自訂頁面（首頁、關於我）
│   └── css/        # 全域樣式
├── docusaurus.config.ts
└── .github/workflows/deploy.yml
```

## 多 blog 設定方式

Docusaurus v3 用一個 preset 放主要 blog，其他 blog 用 plugin 追加：

```typescript
// docusaurus.config.ts
presets: [['classic', { blog: { path: './blog/tech', routeBasePath: 'tech' } }]],
plugins: [
  ['@docusaurus/plugin-content-blog', { id: 'notes', path: './blog/notes', routeBasePath: 'notes' }],
  ['@docusaurus/plugin-content-blog', { id: 'life',  path: './blog/life',  routeBasePath: 'life'  }],
]
```

## AI 寫作流程

```
草稿（中文口語）-> AI 潤稿 -> Review -> commit -> 自動部署
```

實際上 AI 主要做：
1. 補充段落結構
2. 整理 bullet point
3. 加小標讓文章更好掃

內容判斷還是我來，AI 不知道我踩過哪些坑。

## 原始碼

這個部落格本身就是 GitHub public repo：[wz-cch/blog](https://github.com/wz-cch/blog)
