// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Specify the output directory for the build
    assetsDir: 'assets',  // Directory for static assets (images, etc.)
    sourcemap: true,  // Enable source maps in production (useful for debugging)
    minify: 'terser',  // Minify the output using Terser (default is esbuild)
    target: 'esnext',  // Set the target JavaScript version (e.g., esnext, es2015)
    rollupOptions: {
      input: {
        main: './src/index.html',  // Define custom entry point (optional)
      },
      output: {
        entryFileNames: 'assets/[name].js',  // Customize output filename for JS
        chunkFileNames: 'assets/[name]-[hash].js',  // Customize chunk filenames
        assetFileNames: 'assets/[name]-[hash][extname]',  // Customize asset filenames
      },
    },
  },
});
