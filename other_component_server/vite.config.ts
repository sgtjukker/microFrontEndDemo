import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  base: 'http://localhost:5002/'
  ,
  plugins: [vue(),
    federation({
      name: 'otherRemote',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './NewComponent': './src/components/NewComponent.vue',
      },
      shared: ['vue']
  })],
})
