<template>
    <div class="icon_banner">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(item, index) of pages" :key='index' :len='pages.length'>
                <p class="iconList"  v-for='(arr, index) of item' :key='index'>
                    <span :class="'new-icon iconfont ' + arr.iconClass" :style='{background : arr.bgColor}'></span>
                    <span class="icon-desc">{{arr.iconName}}</span>
                </p>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import Vue from 'vue'
import VueSwiper from 'vue-awesome-swiper'
Vue.use(VueSwiper)
require("swiper/css/swiper.css")

export default {
    name : 'banner',
    data (){
        return {
            iconList : [
                {
                    iconClass : 'iconfenzu',
                    iconName : '美食',
                    bgColor : '#fd9d21'
                },
                {
                    iconClass : 'icondianying',
                    iconName : '猫眼电影',
                    bgColor : '#ff6767'
                },
                {
                    iconClass : 'iconhebingxingzhuang',
                    iconName : '酒店',
                    bgColor : '#8a90fa'
                },
                {
                    iconClass : 'iconjiweijiubeigaojiaobei',
                    iconName : '休闲娱乐',
                    bgColor : '#fed030'
                },
                {
                    iconClass : 'iconicon-test',
                    iconName : '外卖',
                    bgColor : '#fd9d21'
                },
                {
                    iconClass : 'iconhuaban',
                    iconName : 'KTV',
                    bgColor : '#fed030'
                },
                {
                    iconClass : 'iconzhoubianyou',
                    iconName : '周边游',
                    bgColor : '#4dc6ee'
                },
                {
                    iconClass : 'iconkouhong',
                    iconName : '丽人',
                    bgColor : '#ff80c2'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '小吃快餐',
                    bgColor : '#fd9d21'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '生活服务',
                    bgColor : '#A8DD99'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '今日新单',
                    bgColor : '#00d3be'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '足疗/按摩',
                    bgColor : '#fed030'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '甜点饮品',
                    bgColor : '#fd9d21'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '婚纱摄影',
                    bgColor : '#FF7360'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '母婴亲子',
                    bgColor : '#ff80c2'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '学习培训',
                    bgColor : '#84d23d'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '结婚',
                    bgColor : '#ff80c2'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '家装',
                    bgColor : 'green'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '代金券',
                    bgColor : '#fd9d21'
                },
                {
                    iconClass : 'iconfenzu',
                    iconName : '全部分类',
                    bgColor : '#00d3be'
                }
                
            ],
            swiperOptions : {
                 pagination: {
                    el: '.swiper-pagination'
                },
            }
        }
    },
    computed : {
        pages () {
            const list = [];
            this.iconList.forEach((item, index) =>{
                let iconIndex = Math.floor(index / 10);
                if(!list[iconIndex]){
                    list.push([])
                }
                list[iconIndex].push(item);
            }) 
            return list;
        }
    }
}
</script>

<style lang="stylus" scoped>
.icon_banner >>> .swiper-pagination
    bottom -.2rem
.icon_banner >>> .swiper-pagination-bullet
    background #F0EFED
    opacity 1
.icon_banner >>> .swiper-pagination-bullet-active
    background #FE8C00
.icon_banner
    padding-bottom .3rem
    background #fff
    overflow hidden
    .swiper-container
        overflow initial
    .iconList
        width 20%
        padding .2rem 0
        text-align center
        float left
        .new-icon
            display block
            width .8rem
            height .8rem
            line-height .8rem
            margin 0 auto .14rem
            background green
            border-radius 50%
            color #fff
            font-size .5rem
        .icon-desc
            font-size .24rem
            color #666
</style>