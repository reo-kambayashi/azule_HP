# ComponentsStyles.astro

## 概要
コンポーネントごとのスタイルを定義するファイルです。このファイルでは、リリースカードやツアーカードに関連するスタイルを定義しています。

## 主な機能
- リリースカードとツアーカードの共通スタイル
- ホバー時のアニメーション効果
- レスポンシブデザイン対応

## 使用方法
このファイルは、`src/pages`内の各ページでインポートされ、スタイルが適用されます。例えば、以下のように使用します：

```astro
---
import ComponentsStyles from '../styles/ComponentsStyles.astro'; // This file seems to be missing, commenting out the import.
---

<ComponentsStyles />
```

## 注意点
- スタイルの変更が他のコンポーネントに影響を与えないよう、クラス名を適切に命名してください。
- レスポンシブデザインを考慮し、メディアクエリを活用してください。