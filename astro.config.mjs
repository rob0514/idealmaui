import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://rob0514.github.io',
  base: '/idealmaui'
  integrations: [tailwind({
    applyBaseStyles: false,
  })]
});