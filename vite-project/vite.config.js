import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // automatically open the browser
    port: 3000, // port for the dev server
  },
  build: {
    // Integrate Webpack config for Vite, if necessary
  },
});
