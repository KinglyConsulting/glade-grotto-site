import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://gladeandgrotto.com',
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel(),
});
