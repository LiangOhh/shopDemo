import axios from 'axios'

// 创建axios实例
const myHttp = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
myHttp.interceptors.request.use(
    config => {
        // console.log(config)
        return config
    },
    e => Promise.reject(e))

// axios响应式拦截器
myHttp.interceptors.response.use(
    res => {
        alert('成功')
        return res.data
    }, e => {
        alert('失败')
        return Promise.reject(e)
    })


export default myHttp