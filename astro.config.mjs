// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://reo-kambayashi.github.io',
    base: '/azule_HP/',
    output: "static",
    trailingSlash: 'always',
    site: 'https://reo-kambayashi.github.io/azule_HP',
    integrations: [sitemap()],
});

