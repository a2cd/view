import { mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import baseConfig from './vite.config.base'
import { genDistVersion } from './utils'

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: true,
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
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
  },
  baseConfig
)
