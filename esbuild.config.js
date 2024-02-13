// esbuild.config.js

import { build } from 'esbuild'

build({
  // other build configurations
  loader: {
    '.node': 'file',
  },
  // other build options
})
