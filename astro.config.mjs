import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  // ...
  integrations: [tailwind()],
  // --------------------------------------------------------------------------------
  // 📌  SSR for page generation & vercel host adaptor
  // --------------------------------------------------------------------------------
  output: 'server',
  adapter: vercel(),
})
