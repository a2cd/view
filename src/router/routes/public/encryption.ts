import type { RouteRecordRaw } from 'vue-router'

const encryptionRoute: RouteRecordRaw = {
  path: '/encryption',
  name: 'Encryption',
  component: () => import('@/views/encryption/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default encryptionRoute
