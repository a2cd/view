import { mergeConfig } from 'vite'
import rollupPluginCopy from 'rollup-plugin-copy'
import { createHtmlPlugin } from 'vite-plugin-html'
import baseConfig from './vite.config.base'
import configCompressPlugin from './plugin/compress'
import configVisualizerPlugin from './plugin/visualizer'
import configImageminPlugin from './plugin/imagemin'
import { genDistVersion } from './utils'
import onDemandComponentPlugin from "./plugin/onDemandComponentPlugin";

export default mergeConfig(
  {
    mode: 'production',
    base: '',
    publicPath: '', // 库名基础路径
    plugins: [
      configCompressPlugin('gzip', false),
      configVisualizerPlugin(),
      onDemandComponentPlugin(),
      configImageminPlugin(),
      createHtmlPlugin({
        minify: true,
        template: 'index.html',
        entry: '/src/main.ts',
        inject: {
          data: {
            version: genDistVersion(),
            injectScript: `<meta name="test" content="test" />`,
          },
          tags: [
            {
              injectTo: 'body-prepend',
              tag: 'div',
              attrs: {
                id: 'tag',
              },
            },
          ],
        },
      }),
      rollupPluginCopy({
        targets: [
          {
            src: 'src/assets/.spa',
            dest: 'dist',
          },
        ],
        verbose: true,
        hook: 'writeBundle', // 打包完成后再copy
      }),
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
