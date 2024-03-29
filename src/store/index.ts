import { createPinia } from 'pinia'

import useAppStore from './modules/app'
import useUserStore from './modules/user'
import useTabBarStore from './modules/tab-bar'
import useMemoStore from './modules/memo'
import usePoetryStore from './modules/poetry'

const pinia = createPinia()

export { useAppStore, useUserStore, useTabBarStore, useMemoStore, usePoetryStore }
export default pinia
