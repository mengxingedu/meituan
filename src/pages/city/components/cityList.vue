<template>
    <div class="cityListCon">
        <div>
            <!--当前城市 start-->
            <CityLocation  />
            <!--end 当前城市-->

            <!--最近访问 start-->
            <CityRecent TypeName='最近访问' v-if='this.recentVisit.length' :isAddHistory='isAddHistory' :hotCity='this.recentVisit' />
            <!--end 最近访问-->

            <!--热门城市 start-->
            <CityRecent TypeName='热门城市' :hotCity='hotCity' />
            <!--end 热门城市-->

            <!--全部城市 start-->
            <div class="Cities_Con">
                <CityTitle CityName='全部城市' />
                <div class="Cities_box">
                    <CityAlphabet :hlphabetList='hlphabet' @aipha='sollClick' />
                    <!-- <CityList  :cityList='item' v-for='(item, val) of AllCity' :key='val' :cityletter='val' /> -->
                    <div class="ListCon"  v-for='(item, val) of AllCity' :key='val' :ref='val' :val='val' >
                        <span class="borders"></span>
                        <div class="clearfix" v-if='val'>
                            <h4 class="shou" :ref='val' :hehe='val'>{{val}}</h4>
                            <P class="city_name"
                             v-for="(item) in item" 
                             :key='item.id'
                             @click="thisHandleClick(item)"
                             > {{item.name}}</P>
                        </div>
                    </div>
                </div>
            </div>
            <!--end 全部城市-->

            <!--底部-->
            <pageFooter />
            <!--底部-->
        </div>
    </div>
</template>

<script>
import CityLocation from './location'
import CityRecent from './recent'
import pageFooter from '@/common/footer/footer'

import CityTitle from './public/Title'
import CityAlphabet from './Alphabet'

import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
    name : 'cityList',
    props : {
        hotCity : [Object, Array],
        AllCity : [Object, Array],
        hlphabet : Array
    },
    data () {
        return {
            Recent : [],
            isAddHistory : false //是否点击添加地址历史
        }  
    },
    components : {
        CityLocation,
        CityRecent,
        pageFooter,
        CityTitle,
        CityAlphabet,
    },
    methods : {
        ...mapMutations(['setRecentVisit', 'setCities']),

        //点击滚动指定元素
        sollClick(val){
            this.scroll.scrollToElement(this.$refs[val][0])
        },
        //添加最近地址访问历史
        thisHandleClick(val){
            if(this.recentVisit.length == 0){
                this.setRecentVisit(val)
                this.setCities(val.name)
                this.$router.push({path : '/'})
            }else{
                for(let i in this.recentVisit){
                    if(this.recentVisit[i].name === val.name){
                        console.log(this.recentVisit[i].name )
                        this.setCities(val.name)
                        this.$router.push({path : '/'})
                        break;
                    }else if(this.recentVisit[i].name !== val.name && i == this.recentVisit.length - 1){
                        this.setRecentVisit(val)
                        this.setCities(val.name)
                        this.$router.push({path : '/'})
                    }       
                }
            }
            
        }
    },
    computed : {
        ...mapState(['recentVisit'])
    },
    mounted(){
        this.scroll = new BScroll('.cityListCon', {   
            click: true,// better-scroll 插件会导致click事件失效，这个配置项是解决这个问题的
            tap: true   
        });
    }
}
</script>

<style lang='stylus' scoped>
.cityListCon
    position absolute
    top 1.3rem
    right 0
    bottom 0
    left 0
    overflow hidden
    .Cities_Con, .Recent_Con
        margin-top .4rem
        .ListCon
            position relative
            margin 0 .2rem
            background #fff
            font-size .28rem
            border-top 1px solid #ddd8ce
            border-left 1px solid #ddd8ce
            border-right 1px solid #ddd8ce
            &:after
                width 25%;
                height 100%
                position absolute
                top 0
                left 25%
                content ''
                border-left 1px solid #ddd8ce
                border-right 1px solid #ddd8ce
            &:before
                width 25%;
                height 100%
                position absolute
                top 0
                left 75%
                content ''
                border-left 1px solid #ddd8ce
            &:first-letter  
                width 100%;
                position absolute
                bottom 0
                content ''
                border-bottom 1px solid #ddd8ce
            .borders 
                width 100%;
                position absolute
                bottom 0
                content ''
                left 0
                right 0
                border-bottom 1px solid #ddd8ce
            .shou
                display inline-block
                float left
                width 25%
                height calc(1.6rem + 1px)
                margin 0
                line-height 1.6rem
                color #B7B7B7
                border-bottom 1px solid #ddd8ce
                text-align center
                font-size .8rem
            .city_name
                position relative
                z-index 2
                display inline-block
                width 25%
                height .8rem
                line-height .8rem
                margin 0
                text-align center
                float left
                border-bottom 1px solid #ddd8ce
</style>