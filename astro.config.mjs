import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
  ],
  output: 'static',
  site: 'https://cetak-yasin.netlify.app', // Updated for Netlify
  base: '/',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
