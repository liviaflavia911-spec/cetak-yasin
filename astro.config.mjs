import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { defineConfig as defineViteConfig } from 'vite';

export default defineConfig({
    integrations: [tailwind()],
    output: 'static',
    vite: defineViteConfig({
        build: {
            cssCodeSplit: false
        }
    }),
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    }
});
