<template>
    <div class="ListCon">
        <span class="borders"></span>
        <div class="clearfix" v-if='cityletter'>
            <h4 class="shou" :ref='cityletter' :hehe='cityletter'>{{cityletter}}</h4>
            <P class="city_name" v-for="(item) in cityList" :key='item.id'> {{item.name}}</P>
        </div>
        <div v-else class="clearfix">
            <P class="city_name" v-for="(item) in cityList" :key='item.id'  @click="thisHandleClick(item, isAddHistory)"> {{item.name}}</P>
        </div>
    </div>
</template>

<script>
// import router from '@/router'
import { mapState, mapMutations } from 'vuex'

export default {
    name : 'cityList',
    props : {
        cityList : [Array, Object],
        cityletter : String,
        isAddHistory : {
            type : Boolean,
            default : true
        }
    },
    computed : {
        ...mapState(['recentVisit']),
        isShowShou (){
            return Object.prototype.toString.call(this.cityList) ===  "[object Object]"
        }
    },
    methods :{
        ...mapMutations(['setRecentVisit', 'setCities']),
        thisHandleClick(val, isAdd){

            if(!isAdd) {
                this.setCities(val.name)
                this.$router.push({path : '/'})
                return false
            }

            if(this.recentVisit.length == 0){
                this.setRecentVisit(val)
                this.setCities(val.name)
                this.$router.push({path : '/'})

            }else{
                for(let i in this.recentVisit){
                    if(this.recentVisit[i].name === val.name){
                        console.log(this.recentVisit[i].name )
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
    }
}
</script>

<style lang='stylus' scoped>
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