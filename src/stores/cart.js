/* import { defineStore } from "pinia";
import { ref } from "vue";
*/
import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useCartStore = defineStore(
    'cart',
    () => {
        const cartList = ref([])
        const addCart = (goods) => {
            console.log('添加到购物车');
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 找到了
                console.log(item)
                item.count += goods.count
            } else {
                // 没找到
                cartList.value.push(goods)
            }
        }
        const delCart = (id) => {
            console.log('删除', id)
            const idx = cartList.value.findIndex((item) => id === item.skuId)
            cartList.value.splice(idx, 1)
        }
        const allCounters = computed(
            () => cartList.value.reduce(
                (allCounters, item) => allCounters + item.count, 0
            )
        )
        const allPrice = computed(
            () => cartList.value.reduce(
                (allPrice, item) => allPrice + item.count * item.price, 0
            )
        )

        return {
            allCounters,
            allPrice,
            cartList,
            addCart, delCart
        }
    },
    {
        persist: true
    }

)

