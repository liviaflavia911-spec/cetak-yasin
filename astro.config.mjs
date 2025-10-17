import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    output: 'static',
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    }
});
