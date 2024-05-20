<template>
    <HomePanel title="人气推荐" subTitle="还行吧">
        <template #detail>
            <ul class="goods-list">
                <li v-for="item in hotArray" :key="item.id">
                    <RouterLink to="/">
                        <img v-img-lazy="item.picture" alt="" />
                        <p class="name">{{ item.title }}</p>
                        <p class="price">{{ item.alt }}</p>
                    </RouterLink>
                </li>
            </ul>
        </template>
    </HomePanel>
</template>

<script setup>
import HomePanel from './HomePanel.vue'
import { getHot } from '@/apis/getMessage'
import { ref, onMounted } from 'vue'
const hotArray = ref([])
const getHotMessage = () => {
    getHot().then(
        res => {
            hotArray.value = res.result
        }
    )
}
onMounted(() => {
    getHotMessage()
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