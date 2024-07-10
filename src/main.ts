import { createApp } from 'vue'
import router from './router'
import store from './store'
import i18n from './locale'
import directive from './directive'
import App from './App.vue'
import '@/assets/style/global.less'
import '@/api/interceptor'
import './mock'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.use(directive)


app.mount('#app')
