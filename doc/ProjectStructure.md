# プロジェクト構成

このドキュメントでは、Azuleウェブサイトプロジェクトのディレクトリ構造を説明します。

## ディレクトリ構造

```
/
├── astro.config.mjs      // Astroの設定ファイル
├── env.d.ts              // 環境変数の型定義
├── package.json          // 依存関係とスクリプト
├── tsconfig.json         // TypeScript設定
├── README.md             // プロジェクト概要と開発ガイド
├── doc/                  // ドキュメント
│   ├── about.md          // Aboutページの説明
│   ├── ComponentsStyles.md // コンポーネントスタイルの説明
│   ├── contact.md        // Contactページの説明
│   ├── Footer.md         // Footerコンポーネントの説明
│   ├── Global.md         // グローバルスタイルの説明
│   ├── Header.md         // Headerコンポーネントの説明
│   ├── home.md           // Homeページの説明
│   ├── index.md          // Indexページの説明
│   ├── MemberCard.md     // MemberCardコンポーネントの説明
│   ├── music.md          // Musicページの説明
│   ├── ReleaseCard.md    // ReleaseCardコンポーネントの説明
│   ├── tour.md           // Tourページの説明
│   ├── TourCard.md       // TourCardコンポーネントの説明
│   ├── TrackList.md      // TrackListコンポーネントの説明
│   └── Welcome.md        // Welcomeコンポーネントの説明
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