import type { RouteRecordRaw } from 'vue-router'

const sounderRoute: RouteRecordRaw = {
  path: '/sounder',
  name: 'Sounder',
  component: () => import('@/views/sounder/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
}

export default sounderRoute
