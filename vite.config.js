import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/slide/',
  plugins: 
  [
    vue(),
    federation({
        name: 'slide',
        filename: 'fed/slide.js',
        // Modules to expose
        exposes: {
          './slide': './src/components/slide.vue',
        },
        shared: ['vue']
    }),
  ],
  build:{
    target: "esnext"
  }
})
