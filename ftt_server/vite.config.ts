import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  plugins: [vue(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './FTT': './src/components/FTT.vue',
          './Counter': './src/components/Counter.vue',
      },
      shared: ['vue']
  })],
})
