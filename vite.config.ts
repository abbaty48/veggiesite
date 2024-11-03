import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        "@src": "/src",
        "@libs": "/src/libs",
        "@msw": "/src/msw",
        "@hooks": "/src/hooks",
        "@states": "/src/states",
        "@assets": "/src/assets",
        "@layouts": "/src/layouts",
        "@features": "/src/assets/features",
        "@sections": "/src/layouts/sections",
        "@components": "/src/components",
    }
  }
})
