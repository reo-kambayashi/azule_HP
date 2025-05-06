# Azule ウェブサイト

Astroフレームワークを使用したAzuleのウェブサイトプロジェクトです。

## プロジェクト構成

```
/
├── astro.config.mjs      // Astroの設定ファイル
├── env.d.ts              // 環境変数の型定義
├── package.json          // 依存関係とスクリプト
├── tsconfig.json         // TypeScript設定
├── README.md             // このファイル
├── public/               // 静的ファイル（ビルド時にそのままコピーされる）
│   ├── 404.html          // GitHub Pages用のリダイレクトページ
│   ├── favicon.svg       // サイトのアイコン
│   ├── images/           // 画像ファイル
│   │   ├── logo.png
│   │   ├── masshiro.jpg
│   │   ├── top.JPG
│   │   ├── wood-texture.jpg
│   │   ├── live_fliyer/  // ライブのフライヤー画像
│   │   │   ├── 2025-05-09.JPG
│   │   │   ├── 2025-05-17.JPG
│   │   │   └── 2025-06-29.JPG
│   │   └── releases/     // リリース作品の画像
│   │       ├── Carte Vierge.JPG
│   │       └── RepEat.jpg
└── src/                  // ソースコード
    ├── assets/           // アセットファイル
    │   ├── astro.svg
    │   └── background.svg
    ├── components/       // 再利用可能なコンポーネント
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── MemberCard.astro
    │   ├── ReleaseCard.astro
    │   ├── TourCard.astro
    │   ├── TrackList.astro
    │   └── Welcome.astro
    ├── data/             // JSONデータ
    │   ├── contact.json
    │   ├── releases.json
    │   └── tour.json
    ├── layouts/          // ページレイアウト
    │   └── Layout.astro
    ├── pages/            // ページコンポーネント
    │   ├── about.astro
    │   ├── contact.astro
    │   ├── home.astro
    │   ├── index.astro
    │   ├── music.astro
    │   └── tour.astro
    └── styles/           // CSSファイル（src内）
        ├── ComponentsStyles.astro
        ├── Global.astro
```

## 主要コンポーネントとファイルの役割

### ページ (src/pages/)
- `index.astro`: メインエントリーポイント
- `home.astro`: ホームページコンテンツ
- `about.astro`: バンド紹介ページ
- `music.astro`: 音楽作品紹介ページ
- `tour.astro`: ライブ情報ページ
- `contact.astro`: 連絡先ページ

### コンポーネント (src/components/)
- `Header.astro`: サイトヘッダーとナビゲーション
- `Footer.astro`: サイトフッター
- `ReleaseCard.astro`: リリース作品カード
- `TourCard.astro`: ライブ情報カード
- `TrackList.astro`: 曲目リスト
- `MemberCard.astro`: メンバー情報カード
- `Welcome.astro`: ウェルカムセクション

### データ (src/data/)
- `releases.json`: リリース作品情報
- `tour.json`: ライブスケジュール情報
- `contact.json`: 連絡先情報

## 開発コマンド

プロジェクトルートから実行できるコマンド:

| コマンド             | 動作                                     |
| :------------------ | :--------------------------------------- |
| `npm install`       | 依存関係をインストール                     |
| `npm run dev`       | 開発サーバーを `localhost:4321` で起動     |
| `npm run build`     | 本番用ビルドを `./dist/` に生成           |
| `npm run preview`   | デプロイ前にビルドをプレビュー             |

## 注意事項
- 画像は `public/images` に保存してください
- スタイルシートは対応するコンポーネントまたはページ名に合わせて命名してください
- データ更新は `src/data` 内の対応するJSONファイルを編集してください
- GitHub Pagesでのルーティングを正しく動作させるため、`astro.config.mjs`の`base`設定と`public/404.html`を適切に設定してください