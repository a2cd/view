import type { RouteRecordRaw } from 'vue-router'

const loveStoryRoute: RouteRecordRaw = {
  path: '/love-story',
  name: 'LoveStory',
  component: () => import('@/views/love-story/index.vue'),
  meta: {
    requiresAuth: false,
    hideInMenu: true,
  },
  children: [],
}

export default loveStoryRoute
