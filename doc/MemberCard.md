# MemberCard.astro

## 概要
メンバー情報を表示するためのカードコンポーネントです。

## 主な機能
- メンバーの名前、役割、写真を表示

## 使用方法
メンバー一覧ページや特定のセクションで使用されます。

## 使用例
以下のように`MemberCard.astro`を使用します：

```astro
---
import MemberCard from '../components/MemberCard.astro';
---

<MemberCard 
    role="Vocalist"
    memberName="Reo"
    description="Lead vocalist and lyricist of Azule Orchid."
    imageSrc="images/Reo.JPG"
/>
```

## 注意点
- メンバー情報は`src/data/members.json`から取得することも可能です。
- 画像パスが正しいことを確認してください。