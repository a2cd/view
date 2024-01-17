import type { RouteRecordRaw } from 'vue-router'

const moviesRoute: RouteRecordRaw = {
  path: '/movies',
  name: 'Movies',
  component: () => import('@/views/movies/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default moviesRoute
