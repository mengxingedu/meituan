<template>
    <div class="banner-con clearfix">
        <img src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png" class="img-box" alt="">
        <div class="logo-theme">
            <p class="logo-tit">省钱利器 购物超划算</p>
            <p class="logo-desc">吃喝玩乐尽在美团</p>
        </div>
        <p class="dowApp">去APP</p>
    </div>
</template>

<script>
export default{
    name : 'home_adver'
}
</script>

<style lang='stylus' scoped>
.banner-con
    height 1.04rem
    background #000
    .img-box
        width .7rem
        height .7rem
        margin .17rem
        float left
    .logo-theme
        color #fff
        float left
        .logo-tit
            font-size .26rem
            line-height .26rem
            margin .22rem 0 .1rem
        .logo-desc
            font-size .22rem
    .dowApp
        float right
        width 1.1rem
        height .6rem
        text-align center
        line-height .6rem
        margin .22rem
        border-radius .15rem
        background linear-gradient(135deg, #FFD000 0%, #FFBD00 100%)
</style>