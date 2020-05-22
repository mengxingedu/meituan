<template>
    <div class="guessYou_con">
        <div class="title">
            猜你喜欢
        </div>
        <ul class="border-bottom">
            <li class="item clearfix border-top" v-for="(item, index) of youList" :key='index'>
                <p class="dealcard-img">
                    <img :src="item.img" alt="">
                </p>
                <div class="deal_info">
                    <p class="dealcard-brand">{{item.name}}</p>
                    <p class="text-block">{{item.desc}}</p>
                    <p class="price clearfix">
                        <span class="strong">{{item.price}}</span>
                        <span class="strong-color">元</span>
                        <span v-if='item.Sale' class="tag">减{{item.Sale}}元</span>
                        <span v-else>门市价:{{item.original}}元</span>
                        <span class="line-right">已售{{item.Sold}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name : 'guessYouLike',
    data () {
        return {
            youList : [
                {
                    name : '南蓉海鲜大酒楼',
                    desc : '[南头]2人套餐，提供免费WiFi',
                    img : 'http://p1.meituan.net/200.0/deal/e7270b354f2a79de18287ff8627c939749721.jpg@111_0_478_478a%7C267h_267w_2e_90q',
                    price : '108',
                    original : '371',
                    Sale : '30',
                    Sold : '2172'
                },
                {
                    name : '花西水疗养生SPA',
                    desc : '[红旗河沟北]【品质服务】品质水疗音乐SPA',
                    img : 'http://p0.meituan.net/200.0/deal/2b5d7ebcacd4bc61f4365854c7348fd473670.jpg@117_0_466_466a%7C267h_267w_2e_90Q',
                    price : '368',
                    original : '',
                    Sale : '30',
                    Sold : '4597'
                },
                {
                    name : '渝味晓宇火锅',
                    desc : '[两路口]50元代金券1张，可叠加',
                    img : '//p1.meituan.net/200.0/deal/a72408eae481de741fb2c61a354e8766324283.jpg@217_0_960_960a%7C267h_267w_2e_90Q',
                    price : '47',
                    original : '50',
                    Sale : '',
                    Sold : '86612'
                }
            ]
        }
    }
}    
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mxmins.styl'

.guessYou_con
    margin-top .2rem
    background #fff;
    
.title
    padding-left .2rem
    color #333
    font-size .34rem
    height .8rem
    line-height .8rem
.item
    padding .2rem 0
    margin-left .2rem
    .dealcard-img
        width 1.8rem
        height 1.64rem
        float left
        overflow hidden
        margin 0 .2rem 0 0 
    .dealcard-img img 
        width 100%
    .deal_info
        width calc(100% - 2.4rem)
        float left
        .dealcard-brand
            color #333
            font-size .3rem
            line-height .3rem
            margin .1rem 0 .2rem 
            ellipsis()
        .text-block
            font-size .26rem
            color #666
            margin-bottom .35rem
            ellipsis()
        .price
            color #666
            font-size .26rem
            .strong
                color #F60
                font-size .36rem
            .strong-color
                color #F60
                margin-right .1rem
            .tag
                color #f90
                font-size .22rem
                border: 1px solid #f90
                border-radius .1rem
                padding .05rem
            .line-right
                float right
                margin-top .1rem
</style>