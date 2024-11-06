import type { RouteRecordRaw } from 'vue-router'

const threeRoute: RouteRecordRaw = {
  path: '/three',
  name: 'Three',
  component: () => import('@/views/three/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default threeRoute
