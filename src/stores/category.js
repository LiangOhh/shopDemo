import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getMessage } from '@/apis/getMessage'
export const useCategoryStore = defineStore('category', () => {
    const categoryArray = ref([])
    // 通过调用此方法获取导航目录
    const getCategory = async () => {
        /* const res = await getMessage()
        console.log(res)
        categoryArray.value = res.result */
        getMessage().then(
            res => {
                categoryArray.value = res.result
            }
        )
    }
    console.log(categoryArray)
    return { categoryArray, getCategory }
})
