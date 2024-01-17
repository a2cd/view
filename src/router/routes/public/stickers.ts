import type { RouteRecordRaw } from 'vue-router'

const stickersRoute: RouteRecordRaw = {
  path: '/stickers',
  name: 'Stickers',
  component: () => import('@/views/stickers/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default stickersRoute
