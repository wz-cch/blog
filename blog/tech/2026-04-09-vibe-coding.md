---
slug: vibe-coding-prototype-to-production
title: "Vibe Coding 的坑：從 prototype 到 production 差在哪"
date: 2026-04-09
authors: wz-cch
tags: [Vibe Coding, 架構設計, AI應用]
---

「Vibe Coding 讓我半天做完以前要一週的事。」

這句話我說過，現在還是這樣說——但前提是你知道它的邊界在哪裡。

<!-- truncate -->

## 問題的起點

去年底我開始把 AI 寫程式的工作流程正式帶進專案。起初是真的爽：prompt 下去，component 出來，整個 API 半小時內架好。然後我就把它推上 staging 了。

然後就開始踩坑。

## Vibe Coding 擅長什麼

- **結構明確的 CRUD**：給定 schema，AI 能生出八九不離十的 CRUD layer
- **測試案例生成**：給定 spec，生 unit test 非常快
- **樣板程式碼**：middleware、validator、DTO mapping——這些機械性的工作 AI 很穩
- **快速試概念**：想試一個新 DB、新 framework，prototype 速度快很多

## Vibe Coding 不擅長什麼

這才是重點。

### 1. 系統邊界與一致性

AI 生出來的程式碼往往每個 function 都是對的，但放在一起就有問題：
- 錯誤處理策略不一致
- 日誌格式到處不同
- 有些地方用 panic，有些 return error

在 prototype 看不出來，到 production 要 debug 時才痛。

### 2. 效能邊界

AI 不知道你的資料量。它生出 `SELECT * FROM events` 很正常，但你的 events 表有三億行。

### 3. 安全性假設

AI 生的 code 預設是「功能正確」，不是「安全正確」。SQL injection、過度暴露欄位、未驗證輸入——需要你自己把關。

## 我的實際工作流程

```
給 AI：有明確範圍的任務（一個 function、一個 struct）
      ↓
自己 review：邏輯、邊界處理、命名
      ↓
整合：確認和現有 codebase 風格一致
      ↓
測試：至少跑一遍 integration test
```

不是「AI 寫，我貼上」。是「AI 起草，我負責」。

## 結論

Vibe Coding 的真實價值是**降低啟動摩擦力**，讓你更快把概念落地。但它不能替代對系統的理解，也不能替代你對 production 環境的責任感。

把它當工具，不要當隊友。
