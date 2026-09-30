// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://specialty-coffee-prague.spbrabota78.workers.dev',
  output: 'static',
  prerenderConflictBehavior: 'ignore',
  legacy: {
    collectionsBackwardsCompat: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    },
    fallback: {
      cs: 'en'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          cs: 'cs-CZ',
        },
      },
    }),
  ],
});