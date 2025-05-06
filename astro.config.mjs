// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    base: '/azule_HP/',
    output: "static",
    trailingSlash: 'always',
    site: 'https://reo-kambayashi.github.io/azule_HP',
    integrations: [sitemap()],
});

