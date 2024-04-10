/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),
  ],
  base: '/',

  server: {
    port: 5173,
    open: false,
  },

  // Build configuration
  build: {
    outDir: 'dist', // Output directory
  },
  resolve: {
    alias: {
      $fonts: resolve('./src/fonts'),
      assets: resolve(__dirname, './public/assets'),
    },
  },
  envDir: './config',
});
