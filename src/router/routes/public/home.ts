import type { RouteRecordRaw } from 'vue-router'

const homeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
}

export default homeRoute
