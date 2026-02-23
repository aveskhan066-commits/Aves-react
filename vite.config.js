import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Vercel ke liye standard folder
    assetsDir: 'assets', // static assets ka folder
    rollupOptions: {
      input: '/index.html', // ensure entry file correctly resolves
    }
  },
  base: './', // relative paths ka use kare production me
})
