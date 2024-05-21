<template>

    <HomePanel title="新鲜好物" subTitle="挺不错的">
        <template #detail>
            <ul class="goods-list">
                <li v-for="item in newArray" :key="item.id">
                    <RouterLink to="/">
                        <img v-img-lazy="item.picture" alt="" />
                        <p class="name">{{ item.name }}</p>
                        <p class="price">&yen;{{ item.price }}</p>
                    </RouterLink>
                </li>
            </ul>
        </template>
    </HomePanel>

</template>

<script setup>
import HomePanel from './HomePanel.vue'
import { getNew } from '@/apis/getMessage'
import { ref, onMounted } from 'vue'
const newArray = ref([])
const getNewMessage = () => {
    getNew().then(
        res => {
            newArray.value = res.result
        }
    )
}
onMounted(() => {
    getNewMessage()
})
</script>
<style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 306px;
        height: 406px;

        background: #f0f9f4;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .price {
            color: $priceColor;
        }
    }
}
</style>