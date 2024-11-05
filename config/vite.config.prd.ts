import { mergeConfig } from 'vite'

import baseConfig from './vite.config.base'
import configCompressPlugin from './plugin/compress'
import configVisualizerPlugin from './plugin/visualizer'
import configImageminPlugin from './plugin/imagemin'
import onDemandComponentPlugin from "./plugin/onDemandComponentPlugin";

export default mergeConfig(
  {
    mode: 'prd',
    base: '',
    publicPath: '',
    plugins: [
      configCompressPlugin('gzip', false),
      configVisualizerPlugin(),
      onDemandComponentPlugin(),
      configImageminPlugin()
    ],
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            arco: ['@arco-design/web-vue'],
            chart: ['echarts', 'vue-echarts'],
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // 生产环境移除console
          drop_debugger: true
        },
      },
    },
  },
  baseConfig
)
