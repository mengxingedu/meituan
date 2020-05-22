<template>
    <div class="link_Conten">
        <dl class="link-List clearfix">
            <dt class="tltle">友情链接：</dt>
            <router-link class="item" v-for="(item, index) of linkList" :key='index' :to='item.link' tag='dd'>{{ item.name }}</router-link>
        </dl>
    </div>
</template>

<script>
export default {
    name : 'FooterLinks',
    data (){
        return {
            linkList : [
                {
                    name : '猫眼电影',
                    link : '//m.maoyan.com/?channel=touch_group'
                },
                {
                    name : '大众点评',
                    link : '//m.dianping.com'
                },
                {
                    name : '美团旅行',
                    link : 'https://i.meituan.com/awp/hfe/hotel-fe-itower_awp/journey/guide-download/index.html?refer_source=yqlj'
                },
                {
                    name : '榛果民宿',
                    link : '//i.zhenguo.com'
                },
                {
                    name : '大众点评下载',
                    link : '//evt.dianping.com/synthesislink/9496.html'
                },
                {
                    name : '美团收银官网',
                    link : 'https://shouyin.meituan.com?utm_source=inner&amp;utm_medium=mti'
                },
                {
                    name : '美团点评餐饮学院',
                    link : 'https://xue.meituan.com/?from=mt0'
                },
                {
                    name : '快驴进货商家合作',
                    link : 'https://www.kuailvzaixian.com/'
                }
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
.link_Conten
    background #fff
    .link-List
        margin 0 .5rem
        padding-bottom .3rem
        text-align center
        .tltle, .item
            margin-left 0
            margin-bottom .2rem
            font-size .2rem
            display inline-block
        .item
            margin-right .5rem
        .tltle
            margin-right .1rem
        
</style>