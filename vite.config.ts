import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: [
      /@mui\/.*/,
      /@emotion\/.*/,
      /@asamuzakjp\/css-color/,
      /@csstools\/css-calc/,
      'html-encoding-sniffer',
      '@exodus/bytes'
    ]
  }
})
