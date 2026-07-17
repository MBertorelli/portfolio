// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages *project* site, so every internal URL must be
// prefixed with the base path. Use `${import.meta.env.BASE_URL}` in templates.
export default defineConfig({
  site: 'https://mbertorelli.github.io',
  base: '/portfolio',
  integrations: [sitemap()],
});
