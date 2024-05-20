// 创建模板默认样式
// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

// 导入自定义懒加载指令插件
import { lazyPlugin } from './directives'
const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
