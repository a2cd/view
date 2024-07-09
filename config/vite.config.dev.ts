import { mergeConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import baseConfig from './vite.config.base'
import { genDistVersion } from './utils'
import onDemandComponentPlugin from "./plugin/onDemandComponentPlugin";

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
      onDemandComponentPlugin(),
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
