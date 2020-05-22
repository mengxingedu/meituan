<template>
    <div class="content">
        <HomeHeader />
        <HomeAdver />
        <HomeBanner />
        <guessYouLike />
        <AllBuying />
        <pageFooter />
    </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeAdver from '@/common/adver/home_adver'
import HomeBanner from './components/banner'
import guessYouLike from './components/guessYouLike'
import AllBuying from './components/AllBuying'
import pageFooter from '@/common/footer/footer'

export default{
    name : 'home',
    components : {
        HomeHeader,
        HomeAdver,
        HomeBanner,
        guessYouLike,
        AllBuying,
        pageFooter
    }
}
</script>

<style lang='stylus' scoped>
.content
    background #f0f0f0
</style>