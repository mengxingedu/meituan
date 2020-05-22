<template>
    <div class="cityContent clearfix">
        <CityHeader />
        <CityLocation />
        <CityRecent />
        <CityRecent />
        <CityAllCities />
        <pageFooter />
    </div>
</template>

<script>
import CityHeader from './components/header'
import CityLocation from './components/location'
import CityRecent from './components/recent'
import CityAllCities from './components/AllCities'
import pageFooter from '@/common/footer/footer'

export default {
    name : 'city',
    components : {
        CityHeader,
        CityLocation,
        CityRecent,
        CityAllCities,
        pageFooter
    }
}
</script>

<style lang='cityContent' scoped>
</style>
