import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: './',         // works, but can clash with createWebHistory
  // base: '/',          // if the app is in root directory
  base: '/',  // if the app is in sub path
  build: {
    watch:true ,
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
  },
})