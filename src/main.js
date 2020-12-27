import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.scss'
import router from './router'
import IconBase from '@/IconsAsSvg/IconBase.vue'

const app = createApp(App)
app.use(router)
app.component('icon-base', IconBase)
app.mount('#app');
