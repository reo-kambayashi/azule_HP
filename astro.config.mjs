// astro.config.mjs

import { defineConfig } from "astro/config";

export default defineConfig({
    // GitHub Pagesの設定を最適化
    site: 'https://reo-kambayashi.github.io', // サイトのURLを設定（必要に応じて修正）
    base: '/azule_HP',  // スラッシュの終わりを削除（重要）
    output: "static",
    // Vite設定
    vite: {
        build: {
            cssCodeSplit: true,
        },
        css: {
            // 必要に応じてCSSの設定
        }
    }
});

