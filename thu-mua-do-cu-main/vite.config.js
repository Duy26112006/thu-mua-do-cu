import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        'thu-mua-cua-go-cu': fileURLToPath(new URL('./thu-mua-cua-go-cu/index.html', import.meta.url)),
        'thu-mua-cua-nhom-cu': fileURLToPath(new URL('./thu-mua-cua-nhom-cu/index.html', import.meta.url)),
        'thu-mua-cua-nhom-xingfa-cu': fileURLToPath(new URL('./thu-mua-cua-nhom-xingfa-cu/index.html', import.meta.url)),
      },
    },
  },
  server: {
    port: 3000
  }
})
