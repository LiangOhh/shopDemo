import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserInfo } from '@/apis/getUser';
export const useUserStore = defineStore('user', () => {
    // state
    // console.log('正在调用用户pinia')
    const userInfo = ref({})
    // 调用该函数进行发送请求获取用户数据
    const getInfo = async (account, password) => {
        const userTemp = await getUserInfo(account, password)
        userInfo.value = userTemp.result
        // console.log('发送网络请求,获取如下', userInfo.value)
    }
    // 清除用户数据
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    return {
        userInfo,
        getInfo,
        clearUserInfo
    }
},
    {
        persist: true
    }
)
