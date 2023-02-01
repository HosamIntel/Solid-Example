import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import windicss from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [solidPlugin(), windicss()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
