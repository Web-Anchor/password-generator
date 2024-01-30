import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'

export default defineConfig({
  // ...
  integrations: [tailwind(), react()],
  // --------------------------------------------------------------------------------
  // 📌  SSR for page generation & vercel host adaptor
  // --------------------------------------------------------------------------------
  output: 'server',
  adapter: vercel(),
})
