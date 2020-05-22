<template>
    <div class="Cities_Con">
        <CityTitle CityName='全部城市' />
        <div class="Cities_box">
            <CityAlphabet />
            
            <CityList />
        </div>
    </div>
    
</template>

<script>
import CityTitle from './public/Title'
import CityAlphabet from './Alphabet'
import CityList from './public/List'

export default {
    name : 'AllCities',
    components : {
        CityTitle,
        CityAlphabet,
        CityList
    }
}
</script>

<style lang='stylus' scoped>
.Cities_Con
    margin-top .4rem
    // background #fff
</style>