import { defineConfig } from 'vite';
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://13.42.26.150:5038',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
