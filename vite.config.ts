import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        "@src": "/src",
        "@libs": "/src/libs",
        "@hooks": "/src/hooks",
        "@states": "/src/states",
        "@assets": "/src/assets",
        "@mocks": "/src/mocks",
        "@layouts": "/src/layouts",
        "@features": "/src/assets/features",
        "@sections": "/src/layouts/sections",
        "@components": "/src/components",
    }
  }
})
