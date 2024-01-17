import type { RouteRecordRaw } from 'vue-router'

const themeClockRoute: RouteRecordRaw = {
  path: '/theme-clock',
  name: 'ThemeClock',
  component: () => import('@/views/theme-clock/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default themeClockRoute
