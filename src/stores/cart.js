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
        const isAll = computed(() => cartList.value.every((item) => item.selected))
        const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((selectCount, item) => selectCount + item.count, 0))
        const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((selectPrice, item) => selectPrice + item.count * item.price, 0))
        const singleCheck = (skuId, selected) => {
            const item = cartList.value.find(
                (item) => item.skuId === skuId
            )
            item.selected = selected
        }
        const allCheck = (selected) => {
            // 把cartList中的每一项的selected都设置为当前的全选框状态
            cartList.value.forEach(item => item.selected = selected)
        }

        return {
            allCounters,
            allPrice,
            cartList,
            isAll, selectedCount, selectedPrice,
            addCart, delCart, singleCheck, allCheck
        }
    },
    {
        persist: true
    }

)

