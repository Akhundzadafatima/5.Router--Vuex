import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/style.css"
import axios from 'axios';

const app=createApp(App)
app.config.globalProperties.$axios=axios;
app.use(router)
app.mount('#app')
