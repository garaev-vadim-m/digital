import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    minify: false,
    outDir: 'docs',
    assetsDir: '',
  },

  base: '',

  server: {
    port: 3001,
  },
});
