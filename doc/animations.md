# animations.js

## 概要
このファイルでは、Intersection Observerを使用してスクロール時にアニメーションを適用する機能を提供します。

## 主な機能
- スクロール時に要素が画面内に入った際のアニメーション効果
- `fade-in-up`や`fade-in-left`といったクラスを持つ要素に適用

## 使用方法
1. 必要な要素に`fade-in-up`または`fade-in-left`クラスを追加します。
2. `animations.js`は`<script>`タグで読み込まれます。

```html
<script src="/js/animations.js" defer></script>
```

## 注意点
- アニメーションのトリガーはIntersection Observer APIに依存しています。古いブラウザでは動作しない可能性があるため、ポリフィルを検討してください。
- アニメーションのクラス名はCSSで定義されている必要があります。