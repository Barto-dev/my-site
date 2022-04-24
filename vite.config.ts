import { defineConfig } from 'vite'
import * as path from 'path';
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
  },
})
