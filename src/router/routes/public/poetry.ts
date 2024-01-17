import type { RouteRecordRaw } from 'vue-router'

const POETRY_ROUTE: RouteRecordRaw = {
  path: '/poetry',
  children: [
    {
      path: '',
      name: 'Poetry',
      component: () => import('@/views/poetry/index.vue'),
    },
    {
      path: 'detail/:id',
      name: 'PoetryDetail',
      component: () => import('@/views/poetry/detail/index.vue'),
    },
  ],
}

export default POETRY_ROUTE
