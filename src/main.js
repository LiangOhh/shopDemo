// 创建模板默认样式
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import { testMessage } from '@/apis/getMessage'
import '@/styles/common.scss'

// getMessage().then(
//     res => {
//         console.log(res)
//     }
// )
/* testMessage().then(
    res => {
        console.log(res)
    }
) */
const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
