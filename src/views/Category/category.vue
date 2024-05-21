<template>
    <div class="top-category">
        <div class="container m-top-20">
            <div class="bread-container">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryObj.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>

        <div class="home-banner">
            <el-carousel height="500px">
                <el-carousel-item v-for="item in bannerArray" :key="item.id">
                    <img v-img-lazy="item.imgUrl" alt="加载图片中">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="sub-list">
            <h3>全部分类</h3>
            <ul>
                <li v-for="i in categoryObj.children" :key="i.id">
                    <RouterLink :to="`/category/sub/${i.id}`">
                        <img :src="i.picture" />
                        <p>{{ i.name }}</p>
                    </RouterLink>
                </li>
            </ul>
        </div>

        <div class="ref-goods" v-for="item in categoryObj.children" :key="item.id">
            <div class="head">
                <h3> {{ item.name }}</h3>
            </div>
            <div class="body">
                <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { getCategory } from '@/apis/getMessage';
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router';
// import { getBanner } from '@/apis/getMessage'
import GoodsItem from '../Home/components/GoodsItem.vue';
import { useBanner } from './hooks/useBanner';
const { bannerArray } = useBanner()
const categoryObj = ref({})
// 获取路由参数
const route = useRoute()
const getCategoryMessage = () => {
    getCategory(route.params.id).then(
        res => {
            categoryObj.value = res.result
        }
    )
}
/* const bannerArray = ref([])
const getBannerMessage = () => {
    getBanner({
        distributionSite: '2'
    }).then(
        res => {
            bannerArray.value = res.result
        }
    )
} */
onMounted(() => {
    getCategoryMessage()
    // getBannerMessage()
})
watch(route, () => getCategoryMessage())
</script>

<style scoped lang="scss">
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;


        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;
            display: flex;
            justify-content: space-around;

            li {

                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}

.home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>