import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//element-plus
import ElementPlus from 'element-plus'

//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
