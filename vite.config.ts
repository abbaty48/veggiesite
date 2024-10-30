import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        "@src": "/src",
        "@hooks": "/src/hooks",
        "@assets": "/src/assets",
        "@layouts": "/src/layouts",
        "@features": "/src/assets/features",
        "@sections": "/src/layouts/sections",
        "@components": "/src/components",
    }
  }
})
