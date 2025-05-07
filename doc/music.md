# music.astro

## 概要
音楽関連の情報を表示するページを構成するコンポーネントです。

## 主な機能
- リリース情報やトラックリストを表示

## 使用方法
このページはサイトのナビゲーションメニューからアクセス可能です。

## 使用例
以下のように`music.astro`を使用します：

```astro
---
import Layout from '../layouts/Layout.astro';
import ReleaseCard from '../components/ReleaseCard.astro';
import releases from '../data/releases.json';
---

<Layout>
    <section>
        <h1>Music</h1>
        {releases.map(release => (
            <ReleaseCard title={release.title} />
        ))}
    </section>
</Layout>
```

## 注意点
- 音楽情報は`src/data/releases.json`から取得されます。
- 各リリースカードのリンクが正しく設定されていることを確認してください。