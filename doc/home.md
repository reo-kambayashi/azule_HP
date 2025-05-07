# home.astro

## 概要
サイトのホームページを構成するコンポーネントです。

## 主な機能
- サイトの概要や最新情報を表示

## 使用方法
このページはサイトのデフォルトのランディングページです。

## 使用例
以下のように`home.astro`を使用します：

```astro
---
import Layout from '../layouts/Layout.astro';
import ReleaseCard from '../components/ReleaseCard.astro';
---

<Layout>
    <section>
        <h1>Welcome to Azule Orchid</h1>
        <ReleaseCard title="Latest Release" />
    </section>
</Layout>
```

## 注意点
- ホームページの内容は`src/data/releases.json`や`src/data/tour.json`から取得されます。
- ユーザーが最初に訪れるページであるため、パフォーマンスを最適化してください。