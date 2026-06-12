/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // Keep the CRA output directory so the existing Netlify publish dir still works.
    outDir: 'build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    // forks pool intermittently times out on Windows paths with spaces (Vitest 4);
    // worker_threads is reliable here.
    pool: 'threads',
  },
})
