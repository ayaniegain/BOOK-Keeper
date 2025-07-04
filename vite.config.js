import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss(),],
   test: { coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
