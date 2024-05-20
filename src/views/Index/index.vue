<template>
    <div>
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
</script>

<style lang="scss" scoped></style>