<template>
    <div class="cityContent clearfix">
        <!--头部 start-->
        <CityHeader />
        <!--end 头部-->

        <CityList :hotCity='hotCity' :hlphabet='hlphabet' :AllCity='AllCity' />

        <!--地址弹框 start-->
        <keep-alive exclude='position'>
             <position 
        v-show='isShow' :addressData='this.addressData' />
        </keep-alive>
       
        <!--end 地址弹框-->
    </div>
</template>

<script>
import Vue from 'vue'
import BaiduMap from "vue-baidu-map";
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import CityHeader from './components/header'
import CityList from './components/cityList';
import position from '@/common/position/position'


Vue.use(BaiduMap, {
  ak: "cdySEojY0YpNjoraRGnH3dHV6Ryn0fg1"
});

export default {
    name : 'city',
    components : {
        CityHeader,
        CityList,
        position
    },
    computed : {
        ...mapState(['cities'])
    },
    data () {
        return {
            Recent : [],
            hotCity : [],
            hlphabet : [],
            AllCity : [],
            addressData : '',
            isShow : false
        }
    },
    methods : {
        ...mapMutations(['setCities']),

        //获取所有城市和热门城市接口
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
