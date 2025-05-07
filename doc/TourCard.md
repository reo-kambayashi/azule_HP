# TourCard.astro

## 概要
ツアー情報を表示するためのカードコンポーネントです。

## 主な機能
- ツアー名、日付、場所を表示

## 使用方法
ツアーページやイベント一覧セクションで使用されます。

## 使用例
以下のように`TourCard.astro`を使用します：

```astro
---
import TourCard from '../components/TourCard.astro';
---

<TourCard 
    tour={{
        title: "Live in Sendai",
        date: "2025.05.09",
        venue: "enn 3rd",
        flyer: "images/live_fliyer/2025-05-09.JPG"
    }}
/>
```

## 注意点
- ツアー情報は`src/data/tour.json`から取得することも可能です。
- 日付フォーマットが正しいことを確認してください。