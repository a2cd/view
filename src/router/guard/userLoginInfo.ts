import type { LocationQueryRaw, Router } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import { useUserStore } from '@/store'
import { isLogin } from '@/utils/auth'
import { publicRouteNameSet } from '../routes'

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // 如果路由在 public 中直接放行
    if (publicRouteNameSet.has(<string>to.name)) {
      next()
      return
    }
    // 如果没登录去登录页
    if (!isLogin()) {
      if (to.name === 'Login') {
        next()
        return
      }
      next({
        name: 'Login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      })
      return
    }
    const userStore = useUserStore()
    if (userStore.role) {
      next()
      return
    }
    // 如果没有去请求
    try {
      await userStore.info()
      next()
    } catch (error) {
      await userStore.logout()
      next({
        name: 'Login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      })
    }
  })
}
