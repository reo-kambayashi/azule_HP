# Azule ウェブサイト

Astroフレームワークを使用したAzuleのウェブサイトプロジェクトです。

## プロジェクト概要
Azuleの公式ウェブサイトを構築するためのプロジェクトです。Astroを使用しており、静的サイト生成を活用しています。

## プロジェクト構成

プロジェクトの詳細なディレクトリ構造については、[プロジェクト構成](./doc/ProjectStructure.md)をご覧ください。

## 開発コマンド

| コマンド             | 動作                                     |
| :------------------ | :--------------------------------------- |
| `npm install`       | 依存関係をインストール                     |
| `npm run dev`       | 開発サーバーを `localhost:4321` で起動     |
| `npm run build`     | 本番用ビルドを `./dist/` に生成           |
| `npm run preview`   | デプロイ前にビルドをプレビュー             |

## ドキュメントリンク
- [Aboutページの説明](./doc/about.md)
- [コンポーネントスタイルの説明](./doc/ComponentsStyles.md)
- [Contactページの説明](./doc/contact.md)
- [Footerコンポーネントの説明](./doc/Footer.md)
- [グローバルスタイルの説明](./doc/Global.md)
- [Headerコンポーネントの説明](./doc/Header.md)
- [Homeページの説明](./doc/home.md)
- [Indexページの説明](./doc/index.md)
- [MemberCardコンポーネントの説明](./doc/MemberCard.md)
- [Musicページの説明](./doc/music.md)
- [ReleaseCardコンポーネントの説明](./doc/ReleaseCard.md)
- [Tourページの説明](./doc/tour.md)
- [TourCardコンポーネントの説明](./doc/TourCard.md)
- [TrackListコンポーネントの説明](./doc/TrackList.md)
- [Welcomeコンポーネントの説明](./doc/Welcome.md)

## 注意事項
- 画像は `public/images` に保存してください。
- スタイルシートは対応するコンポーネントまたはページ名に合わせて命名してください。
- データ更新は `src/data` 内の対応するJSONファイルを編集してください。
- GitHub Pagesでのルーティングを正しく動作させるため、`astro.config.mjs`の`base`設定と`public/404.html`を適切に設定してください。