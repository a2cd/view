import type { RouteRecordRaw } from 'vue-router'

const toolRoomRoute: RouteRecordRaw = {
  path: '/tool-room',
  name: 'ToolRoom',
  component: () => import('@/views/tool-room/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default toolRoomRoute
