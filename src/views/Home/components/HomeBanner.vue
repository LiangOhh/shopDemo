<template>
    <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerArray" :key="item.id">
                <img v-img-lazy="item.imgUrl" alt="加载图片中">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script setup>
import { getBanner } from '@/apis/getMessage'
import { onMounted, ref } from 'vue'
const bannerArray = ref([])
const getBannerMessage = () => {
    getBanner().then(
        res => {
            bannerArray.value = res.result
        }
    )
}
// console.log(bannerArray)
onMounted(() => {
    getBannerMessage()
})
</script>
<style scoped lang='scss'>
.home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>