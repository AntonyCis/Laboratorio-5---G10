import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['1b01dc30-be7f-4d74-93b6-9e9a94114163-00-3nzg55poekvvg.picard.replit.dev']
  }
})
