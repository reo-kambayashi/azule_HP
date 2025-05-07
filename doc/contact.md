# contact.astro

## 概要
サイトの「Contact」ページを構成するコンポーネントです。

## 主な機能
- 問い合わせフォームの表示
- 連絡先情報の提供

## 使用方法
このページはサイトのナビゲーションメニューからアクセス可能です。

## 使用例
以下のように`contact.astro`を使用します：

```astro
---
import Layout from '../layouts/Layout.astro';
import contact from '../data/contact.json';
---

<Layout>
    <section>
        <h1>Contact</h1>
        <ul>
            <li>Email: {contact.email}</li>
            <li>Instagram: {contact.instagram}</li>
        </ul>
    </section>
</Layout>
```

## 注意点
- 連絡先情報は`src/data/contact.json`から取得されます。
- 外部リンクには`target="_blank"`と`rel="noopener noreferrer"`を設定してください。