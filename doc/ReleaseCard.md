# ReleaseCard.astro

## 概要
リリース情報を表示するためのカードコンポーネントです。

## 主な機能
- リリースタイトル、カバー画像、リリース日を表示

## 使用方法
音楽ページやリリース一覧セクションで使用されます。

## 使用例
以下のように`ReleaseCard.astro`を使用します：

```astro
---
import ReleaseCard from '../components/ReleaseCard.astro';
---

<ReleaseCard 
    id={1}
    title="Carte Vierge"
    cover="images/releases/Carte Vierge.JPG"
    releaseDate="2025-04-29"
    tracks={["430nm", "鏡", "RepEat"]}
    links={{ youtube: "https://youtube.com", subscription: "https://linkco.re" }}
/>
```

## 注意点
- リリース情報は`src/data/releases.json`から取得することも可能です。
- 各リンクが正しく設定されていることを確認してください。