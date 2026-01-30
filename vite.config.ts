import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@AtallahFatma/design-system': path.resolve(__dirname, '../design-system/dist')
    }
  }
})
