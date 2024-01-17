import type { RouteRecordRaw } from 'vue-router'

const historyMapRoute: RouteRecordRaw = {
  path: '/history-map',
  name: 'HistoryMap',
  component: () => import('@/views/history-map/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default historyMapRoute
