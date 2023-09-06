import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   target: "esnext",
  //   rollupOptions: {
  //     input:{
  //       app: './index.html'
  //     }
  //   }
  // },
  // server:{
  //   open: './index.html'
  // },
  plugins: [vue(),
    federation({
      name: 'host',
      remotes: {
          remote: "http://localhost:5001/assets/remoteEntry.js",
          otherRemote: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ['vue']
  })],
})
