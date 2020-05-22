<template>
    <div class="bar_content clearfix">
        <P class="logon_btn">登录</P>
        <P class="register_btn">注册</P>
        <p class="bar_right">
            <span class="m_city">城市：</span>
            <span class="iconfont icondingwei icn_local"></span>
            <span class="city_name">重庆</span>
        </p>
    </div>
</template>

<script>
export default{
    name : 'FooterBar'
}
</script>

<style lang='stylus' scoped>
.bar_content
    margin-top 1px
    background #fff
    padding .3rem .5rem .5rem .5rem
    .logon_btn, .register_btn
        background #FFD000
        width 1.1rem
        height .54rem
        text-align center
        line-height .54rem
        float left
        margin 0 .2rem 0 0
        border-radius .12rem
    .bar_right
        margin-top .035rem
        float right 
        font-size .24rem
        .m_city
            color #999
        .icn_local
            color #FFD000
            vertical-align -.01rem
            margin-right .05rem
        .city_name
            color #222

</style>