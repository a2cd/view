import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import rollupPluginCopy from 'rollup-plugin-copy'
import { genDistVersion } from './utils'
import { createHtmlPlugin } from 'vite-plugin-html'
import configArcoStyleImportPlugin from './plugin/arcoStyleImport'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({ svgoConfig: {} }),
    configArcoStyleImportPlugin(),
    rollupPluginCopy({
      targets: [
        {
          src: 'src/public/*', // 将public中的资源copy到dist中
          dest: 'dist',
        },
      ],
      verbose: true,
      hook: 'writeBundle', // 打包完成后再copy
    }),
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.ts', // 20230820002000 致命问题, 写法'src/main.ts'少一个/, 造成嵌套路由输入错误无法跳转到404页面
      template: 'index.html',
      inject: {
        data: {
          version: genDistVersion(),
          injectScript: `<meta name="test" content="test"/>`,
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
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js'],
  },
  define: {
    'process.env': {},
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/style/breakpoint.less')}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
})
