<template>
    <div>
        <IndexSticky></IndexSticky>
        <IndexNav></IndexNav>
        <IndexHeader></IndexHeader>
        <router-view></router-view>
        <IndexFooter></IndexFooter>
    </div>
</template>

<script setup>
import IndexHeader from './components/IndexHeader.vue'
import IndexNav from './components/IndexNav.vue'
import IndexFooter from './components/IndexFooter.vue'
import IndexSticky from './components/IndexSticky.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
const category = useCategoryStore()
onMounted(() => {
    category.getCategory()
})
</script>

<style lang="scss" scoped></style>