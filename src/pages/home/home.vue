<template>
    <div class="content">
        <HomeHeader />
        <HomeAdver />
        <HomeBanner />
    </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeAdver from '@/common/adver/home_adver'
import HomeBanner from './components/banner'

export default{
    name : 'home',
    components : {
        HomeHeader,
        HomeAdver,
        HomeBanner
    }
}
</script>

<style lang='stylus' scoped>
.content
    background #f0f0f0
</style>