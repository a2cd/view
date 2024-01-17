import type { RouteRecordRaw } from 'vue-router'

const randomNumberRoute: RouteRecordRaw = {
  path: '/random-number',
  name: 'RandomNumber',
  component: () => import('@/views/random-number/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default randomNumberRoute
