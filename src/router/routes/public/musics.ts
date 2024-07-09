import type { RouteRecordRaw } from 'vue-router'

const musicsRoute: RouteRecordRaw = {
  path: '/musics',
  name: 'Musics',
  component: () => import('@/views/musics/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default musicsRoute
