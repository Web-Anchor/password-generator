import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import netlify from '@astrojs/netlify'

export default defineConfig({
  // ...
  integrations: [
    tailwind({
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
    }),
    react(),
  ],
  // --------------------------------------------------------------------------------
  // 📌  SSR for page generation & vercel host adaptor
  // --------------------------------------------------------------------------------
  output: 'server',
  // adapter: netlify(),
  // adapter: vercel(),
  adapter: deno(),
})
