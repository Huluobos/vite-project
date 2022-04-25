import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'views': resolve('src/views'),
      'assets': resolve('src/assets')
    }
  },
  // server: {
  //   https: true,
  //   // Listening on all local IPs
  //   host: true,
  //   port: VITE_PORT,
  //   // Load proxy configuration from .env
  //   proxy: createProxy(VITE_PROXY),
  // },
})
