# 技術部落格規劃文件
> 用途：丟給 AI 在 local 執行建置

---

## 一、網站定位

- **性質**：個人技術部落格，真實身份公開，連結 LinkedIn
- **目標受眾**：有年資的工程師、技術主管、獵頭
- **核心印象**：務實、有深度、持續學習、不只會說不會做

---

## 二、技術架構

- **框架**：Docusaurus v3
- **部署**：GitHub Pages
- **自動化**：GitHub Actions（push 即自動部署）
- **AI 工作流程**：本地 AI 輔助潤稿 → commit → 自動發布

---

## 三、導覽列結構（navbar）

```
[Logo / 名字]    技術文章    探索筆記    閒聊    關於我    [LinkedIn icon]
```

| 項目 | 說明 |
|------|------|
| **技術文章** | 深度文，有立場，有結論，約一月一篇 |
| **探索筆記** | 新工具、新 DB、附 GitHub 範例，輕量 |
| **閒聊** | 純好玩，無壓力，畫圖 AI、股票回測等 |
| **關於我** | 簡介、技術背景、LinkedIn 連結 |

---

## 四、視覺風格

### 色彩系統

| 用途 | 色碼 | 說明 |
|------|------|------|
| Primary | `#2E86AB` | 科技藍，沉穩不俗氣 |
| Primary Dark | `#1B6A8A` | hover / active 狀態 |
| Accent | `#F6AE2D` | 強調色，用在 tag、highlight |
| Background | `#FFFFFF` / `#F8F9FA` | 主背景 / 區塊背景 |
| Text | `#1A1A2E` | 深色主文字 |
| Code Block | `#1E1E2E` | 深色底，類 VS Code |

> Dark mode 自動支援 Docusaurus 內建切換

### 字型

| 用途 | 字型 |
|------|------|
| 標題 | `Noto Sans TC`（中文）+ `JetBrains Mono`（英文標題） |
| 內文 | `Noto Sans TC` |
| 程式碼 | `JetBrains Mono` |

---

## 五、首頁（Landing Page）

### 版面配置（由上到下）

```
┌─────────────────────────────────┐
│  Hero Section                   │
│  大標題：名字 / 一句話定位      │
│  副標：平台架構 × AI 應用       │
│  [LinkedIn 按鈕]  [最新文章]    │
├─────────────────────────────────┤
│  最新技術文章（3篇卡片）        │
├─────────────────────────────────┤
│  最新探索筆記（3篇卡片）        │
├─────────────────────────────────┤
│  關於我（一段話 + 技術標籤）    │
└─────────────────────────────────┘
```

### Hero Section 內容

```
[你的名字]
平台架構 × AI 應用 × 十年實戰

寫真實踩過的坑，不寫 demo 假設。
```

### 技術標籤（About 區塊）

`Golang` `C#` `Kubernetes` `IoTDB` `PostgreSQL` `AI 應用` `系統架構` `Vibe Coding`

---

## 六、文章分類與 Tag 規劃

### 技術文章 tag
`架構設計` `AI應用` `Vibe Coding` `資料庫` `後端` `平台工程`

### 探索筆記 tag
`工具試用` `DB比較` `GitHub範例` `踩坑紀錄`

### 閒聊 tag
`好玩` `量化` `生成AI` `隨筆`

---

## 七、關於我頁面

### 內容架構

1. 一段話自我介紹（平台工程背景，AI 應用，實戰導向）
2. 技術標籤
3. 目前關注的方向（AI × 系統架構）
4. LinkedIn 按鈕
5. 3C 部落格連結（匿名，不揭露身份，選擇性放）

---

## 八、GitHub Actions 自動部署

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

---

## 九、AI 寫作工作流程

```
你給草稿（中文口語）
    ↓
AI 潤稿（調整語氣、補充結構、加小標）
    ↓
你 Review（確認立場和內容正確）
    ↓
AI commit + push
    ↓
GitHub Actions 自動部署
```

---

## 十、第一批文章規劃

| 類型 | 題目 | 優先度 |
|------|------|--------|
| 技術文 | Vibe Coding 的坑：從 prototype 到 production 差在哪 | ⭐ 第一篇 |
| 技術文 | 你其實需要時序 DB：IoTDB vs PostgreSQL 實戰比較 | 第二篇 |
| 探索筆記 | 用 AI 管我的技術部落格：Docusaurus + GitHub Actions + AI 工作流 | 第三篇 |
| 閒聊 | 用 AutoResearch 回測台灣 50：好玩但別當真 | 隨時 |

---

## 十一、給 AI 的建置指令（直接貼給 AI）

```
請幫我用 Docusaurus v3 建立一個技術部落格，規格如下：

1. 執行 npx create-docusaurus@latest my-blog classic --typescript
2. 導覽列：技術文章、探索筆記、閒聊、關於我，右側加 LinkedIn icon 連結
3. 主色 #2E86AB，accent #F6AE2D，字型使用 Noto Sans TC + JetBrains Mono
4. 首頁改為自訂 Landing Page，包含 Hero、最新文章卡片、關於我
5. 建立三個 blog 資料夾分類：tech、notes、life
6. 設定 GitHub Actions 自動部署到 GitHub Pages
7. 關閉 docs 區塊，只留 blog 功能
8. Dark mode 預設跟隨系統
```

---

> 這份文件是規劃用，實際細節（名字、LinkedIn URL、個人介紹）在建置時再填入。
