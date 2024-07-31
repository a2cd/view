import type { RouteRecordRaw } from 'vue-router'

const absorberRoute: RouteRecordRaw = {
  path: '/absorber',
  name: 'Absorber',
  component: () => import('@/views/absorber/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default absorberRoute
