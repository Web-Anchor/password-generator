const esbuild = require('esbuild')

esbuild
  .build({
    entryPoints: ['your_entry_file.js'], // Update this with your actual entry file
    bundle: true,
    outfile: 'dist/bundle.js',
    loader: {
      '.node': 'file', // Use the 'file' loader for .node files
    },
  })
  .catch(() => process.exit(1))
