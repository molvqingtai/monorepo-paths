import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'node:path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      projectDiscovery: 'lazy'
    })
  ]
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //     '@server': path.resolve(__dirname, '../server/src')
  //   }
  // }
})
