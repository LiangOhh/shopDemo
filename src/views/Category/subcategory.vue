<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">居家
                </el-breadcrumb-item>
                <el-breadcrumb-item>居家生活用品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="reqData.sortField" @tab-change="changeSort(reqData.sortField)">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <!-- 无限滚动加载更多 -->
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <GoodsItem v-for="good in goodList" :good="good" :key="good.id" />
            </div>
        </div>
    </div>

</template>
<script setup>
import { getSubCategory, getSubCategoryList } from '@/apis/getMessage'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '../Home/components/GoodsItem.vue';
const route = useRoute()
const SubCategory = ref({})
const getSubData = async () => {
    const res = await getSubCategory(route.params.id)
    SubCategory.value = res.result
}
// 获取数据列表
const goodList = ref([])
const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})

const getGoodList = async () => {
    const res = await getSubCategoryList(reqData.value)
    console.log(res)
    goodList.value = res.result.items
}
onMounted(async () => {
    getSubData()
    await getGoodList()
    // await console.log(goodList.value);
})
async function changeSort(sortField) {
    console.log(sortField)
    reqData.value.page = 1
    await getGoodList()
}
const disabled = ref(false)
const load = async () => {
    reqData.value.page++
    const res = await getSubCategoryList(reqData.value)
    console.log(res)
    goodList.value = [...goodList.value, ...res.result.items]
    if (res.result.items.length === 0) {
        disabled.value = true
    }
}

</script>
<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>