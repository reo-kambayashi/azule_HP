# Azule Official Website

Azule Orchidバンドの公式ウェブサイト。Astroフレームワークを使用した静的サイト生成プロジェクトです。

## 技術スタック

- **フレームワーク**: Astro 5.7.10
- **言語**: TypeScript, CSS
- **ホスティング**: GitHub Pages
- **ビルド**: 静的サイト生成（SSG）
- **スタイル**: CSS Variables、グラスモーフィズム、美術館テーマ

## プロジェクト構成

```
src/
├── components/          # 再利用可能なUIコンポーネント
│   ├── Header.astro    # サイトヘッダー（ナビゲーション）
│   ├── Footer.astro    # サイトフッター
│   ├── MemberCard.astro # メンバー紹介カード
│   ├── ReleaseCard.astro # リリース情報カード
│   ├── TourCard.astro  # ツアー情報カード
│   └── TrackList.astro # 楽曲リスト表示
├── pages/              # ページコンポーネント（ルーティング）
│   ├── index.astro     # ホームページ
│   ├── about.astro     # メンバー紹介ページ
│   ├── music.astro     # 音楽・リリース情報
│   ├── tour.astro      # ライブ・ツアー情報
│   ├── contact.astro   # お問い合わせ
│   └── 404.astro       # エラーページ
├── layouts/            # レイアウトテンプレート
│   └── Layout.astro    # 共通レイアウト
├── styles/             # グローバルスタイル
│   └── Global.astro    # CSS変数、共通スタイル定義
└── data/               # 静的データ（JSON）
    ├── members.json    # メンバー情報
    ├── releases.json   # リリース情報
    ├── tour.json       # ツアー情報
    └── contact.json    # 連絡先情報
```

## セットアップと開発

### 必要環境
- Node.js 18.0+
- npm または yarn

### インストール
```bash
# リポジトリをクローン
git clone https://github.com/reo-kambayashi/azule_HP.git
cd azule_HP

# 依存関係をインストール
npm install
```

### 開発サーバー
```bash
# 開発サーバーを起動（ホットリロード有効）
npm run dev

# ブラウザで http://localhost:4321/azule_HP/ を開く
```

### ビルドとデプロイ
```bash
# 本番用ビルド
npm run build

# ビルド結果をプレビュー
npm run preview

# GitHub Pagesにデプロイ（gh-pagesブランチ）
npm run deploy
```

## 開発ガイドライン

### デザインシステム
プロジェクトは美術館をイメージした白黒基調のデザインテーマを採用しています。

**カラーパレット**:
- プライマリ: `#1a1a1a` (ディープブラック)
- セカンダリ: `#333333` (チャコールグレー)
- アクセント: `#666666` (ミディアムグレー)
- 背景: 白からライトグレーのグラデーション

**CSS変数**: `src/styles/Global.astro`で管理
```css
--color-primary: #1a1a1a;
--color-secondary: #333333;
--color-accent: #666666;
--shadow-glass: ガラスモーフィズム効果用
```

### コンポーネント開発
1. **Astroコンポーネント**: `.astro`ファイルでHTML、CSS、JSを統合
2. **Props型定義**: TypeScriptインターフェースで型安全性を確保
3. **レスポンシブデザイン**: CSS Grid/Flexboxでモバイルファースト
4. **アニメーション**: CSS Transitionsで控えめなホバー効果

### データ管理
```bash
# メンバー情報を更新
src/data/members.json

# リリース情報を追加
src/data/releases.json

# ツアー情報を更新
src/data/tour.json
```

### 画像管理
```bash
# 静的アセットは public/ に配置
public/images/               # 一般画像
public/images/releases/      # アルバムアートワーク
public/images/live_fliyer/   # ライブフライヤー
```

## トラブルシューティング

### 一般的な問題

**GitHub Pages ルーティングエラー**
- `astro.config.mjs`の`base: '/azule_HP/'`設定を確認
- 相対パスが正しく設定されているか確認

**スタイルが適用されない**
- ブラウザキャッシュをクリア（Ctrl+Shift+R / Cmd+Shift+R）
- CSS変数が`src/styles/Global.astro`で正しく定義されているか確認

**ビルドエラー**
```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install

# TypeScriptエラーの確認
npm run astro check
```

## パフォーマンス最適化

- **画像**: WebP形式の使用を推奨
- **CSS**: 未使用スタイルの削除
- **JavaScript**: 最小限の使用（主にCSS/HTMLベース）
- **バンドルサイズ**: Astroの島アーキテクチャでJS配信量を最小化

## 貢献ガイド

1. 機能ブランチを作成: `git checkout -b feature/新機能名`
2. 変更をコミット: `git commit -m "機能: 説明"`
3. プッシュ: `git push origin feature/新機能名`
4. プルリクエストを作成

## ライセンス

このプロジェクトはAzule Orchidバンドの公式ウェブサイトです。

## 詳細ドキュメント

開発に必要な詳細な仕様とガイドラインは以下のドキュメントを参照してください：

- **[コンポーネント仕様書](./doc/COMPONENTS.md)** - 全コンポーネントの詳細仕様とAPI
- **[ページ構成ガイド](./doc/PAGES.md)** - 各ページの機能とデータ管理
- **[開発ワークフロー](./doc/DEVELOPMENT.md)** - コーディング規約とベストプラクティス

> 過去のドキュメントは`doc/archive/`ディレクトリに保管されています。