import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'

export default defineConfig({
  // ...
  // https://astro.build/config
  integrations: [
    tailwind({
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
    }),
    react(),
  ],
  // --------------------------------------------------------------------------------
  // 📌  SSR for page generation & vercel host adapter
  // --------------------------------------------------------------------------------
  output: 'server',
  adapter: netlify(),
})
