import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
// Eventually, replace this import with the official one - we're using a
// patched version for now.
// import deno from '@astrojs/deno'
import deno from 'deno-astro-adapter'

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
  // 📌  SSR for page generation & vercel host adapter
  // --------------------------------------------------------------------------------
  output: 'server',
  adapter: deno(),
})
