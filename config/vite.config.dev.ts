import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'

export default mergeConfig(
  {
    mode: 'dev',
    server: {
      open: true,
      fs: {
        strict: true,
      },
    },
    plugins: [],
  },
  baseConfig
)
