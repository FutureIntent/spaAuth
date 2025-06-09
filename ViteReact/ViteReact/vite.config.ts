import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8000,
    strictPort: true
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 8000,
    strictPort: true,
    host: true
  }
})
