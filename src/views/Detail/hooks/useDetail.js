import { getDetail } from '@/apis/getGoods';
import { ref, onMounted } from 'vue';

/* export function useDetail(id) {
    const goods = ref({})
    function getGoods(id) {
        console.log('正在调用hooks商品详情');
        getDetail(id).then(
            res => {
                console.log('hook接收到的id:', id)
                console.log(res)
                goods.value = res.result
            }
        )
        // goods.value = res.result
        // console.log(goods.value)
    }
    onMounted(async () => {
        await getGoods(id)
        console.log(goods.value)
    })
    return { goods }
} */

export function useDetail(id) {
    const goods = ref({})
    async function getGoods(id) {
        try {
            // console.log('正在调用hooks商品详情');
            const res = await getDetail(id);
            // console.log('hook接收到的id:', id)
            goods.value = res.result
        } catch (error) {
            console.error('获取商品详情失败:', error);
        }
    }

    onMounted(() => {
        getGoods(id)
    })

    return { goods }
}