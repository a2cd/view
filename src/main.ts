import {createApp} from 'vue'
import router from './router'
import store from './store'
import i18n from './locale'
import components from './components'
import directive from './directive'
import App from './App.vue'
import '@/assets/style/global.less'
import '@/api/interceptor'
import './mock'
import particles from "@/particles";

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.use(components)
app.use(directive)
app.use(particles) // 粒子动效

app.mount('#app')
