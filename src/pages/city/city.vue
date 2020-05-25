<template>
    <div class="cityContent clearfix">
        <!--头部 start-->
        <CityHeader />
        <!--end 头部-->

        <!--当前城市 start-->
        <CityLocation  />
        <!--end 当前城市-->

        <!--最近访问 start-->
        <CityRecent TypeName='最近访问' v-if='Recent.length' />
        <!--end 最近访问-->

        <!--热门城市 start-->
        <CityRecent TypeName='热门城市' :cityList='cityList' />
        <!--end 热门城市-->

        <!--全部城市 start-->
        <CityAllCities  :hlphabetList='hlphabet' :AllCity='AllCity' />
        <!--end 全部城市-->

        <!---->
        <pageFooter />
        <!---->
    </div>
</template>

<script>
import CityHeader from './components/header'
import CityLocation from './components/location'
import CityRecent from './components/recent'
import CityAllCities from './components/AllCities'
import pageFooter from '@/common/footer/footer'
import axios from 'axios'

export default {
    name : 'city',
    components : {
        CityHeader,
        CityLocation,
        CityRecent,
        CityAllCities,
        pageFooter
    },
    data () {
        return {
            Recent : [],
            cityList : [],
            hlphabet : [],
            AllCity : []
        }
    },
    methods : {
        getCityInfo(){
            axios.get('/mock/city.json').then((response) => {
                console.log(response)
                if(response.status == 200){
                    if(response.data && response.data.data){
                        const data = response.data.data;
                        this.cityList = data.hotCities;
                        this.hlphabet = data.hlphabet;
                        this.AllCity = data.cities;
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    mounted(){
        this.getCityInfo();
    }
}
</script>

<style lang='cityContent' scoped>
</style>
