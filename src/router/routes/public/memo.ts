import type { RouteRecordRaw } from 'vue-router'

const memoRoute: RouteRecordRaw = {
  path: '/memo',
  name: 'Memo',
  component: () => import('@/views/memo/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default memoRoute
