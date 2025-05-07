# about.astro

## 概要
サイトの「About」ページを構成するコンポーネントです。

## 主な機能
- Azuleの概要や歴史を紹介

## 使用方法
このページはサイトのナビゲーションメニューからアクセス可能です。

## 使用例
以下のように`about.astro`を使用します：

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout>
    <section>
        <h1>About Us</h1>
        <p>Azule Orchidの歴史や概要を紹介します。</p>
    </section>
</Layout>
```

## 注意点
- ページの内容は`src/data/members.json`などのデータファイルと連携して動的に生成されます。
- レスポンシブデザインを考慮し、スタイルを適切に調整してください。