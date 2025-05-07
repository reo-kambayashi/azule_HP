# astro.config.mjs

## 概要
Astroプロジェクトの設定を管理するファイルです。このファイルでは、ベースURLや出力形式、サイト情報、統合プラグインの設定を行います。

## 主な設定項目
- `base`: サイトのベースURLを指定します。
- `output`: 出力形式を指定します（例: `static`）。
- `site`: サイトのURLを指定します。
- `integrations`: 使用するAstroのプラグインを指定します。

## 使用方法
このファイルはプロジェクトのルートディレクトリに配置され、Astroのビルドや開発サーバーの設定に使用されます。

```javascript
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    base: '/azule_HP/',
    output: "static",
    trailingSlash: 'always',
    site: 'https://reo-kambayashi.github.io/azule_HP/',
    integrations: [sitemap()],
});
```

## 注意点
- `base`設定はGitHub Pagesなどのホスティング環境に合わせて適切に設定してください。
- プラグインの設定はプロジェクトの要件に応じて追加・変更してください。