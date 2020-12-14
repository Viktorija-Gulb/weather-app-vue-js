import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.scss'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import IconBase from '@/IconsAsSvg/IconBase.vue'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.component('icon-base', IconBase)
app.mount('#app');
