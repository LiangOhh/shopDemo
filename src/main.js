// 创建模板默认样式
// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

// 导入自定义懒加载指令插件
import { lazyPlugin } from './directives'
import { componentPlugin } from '@/components'


const app = createApp(App)
// 创建pinia实例
const pinia = createPinia()
// 注册插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
