/// <reference types="vite/client" />

/**
 * 文件用于智能提示，第一行注释不能删
 * import.meta.env.{VAR}
 */

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface ImportMetaEnv {
  readonly VITE_DOCS_URL: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_ICONFONT_URL: string
  readonly VITE_RESOURCES_URL: string
}
