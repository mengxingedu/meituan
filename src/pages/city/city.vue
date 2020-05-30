<template>
    <div class="cityContent clearfix">
        <!--头部 start-->
        <CityHeader />
        <!--end 头部-->

        <CityList  :hotCity='hotCity' :hlphabet='hlphabet' :AllCity='AllCity' />

        
    </div>
</template>

<script>
import CityHeader from './components/header'
import CityList from './components/cityList';

import axios from 'axios'

export default {
    name : 'city',
    components : {
        CityHeader,
        CityList,
        
    },
    provide : {
        
    },
    data () {
        return {
            Recent : [],
            hotCity : [],
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
                        this.hotCity = data.hotCities;
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

<style lang='stylus' scoped>
</style>
