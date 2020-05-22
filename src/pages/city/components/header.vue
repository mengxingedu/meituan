<template>
    <div class="navbar clearfix">
        <router-link class="nav-wrap-left" tag='div' to='/'>
            <span class="iconfont iconback header_Bar"></span>
        </router-link>
        <div class="navHeader">选择城市</div>
        <div class="nav_right">
            <router-link to='/' tag='span' class="iconfont iconzhuye icon_zhuye" ></router-link>
            <span class="iconfont iconsousuo icon_sou"></span>
        </div>
    </div>
</template>

<script>
export default {
    name : 'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mxmins.styl'

.navbar
    position relative
    height 1rem
    line-height 1rem
    background $bgColor
    text-align center
    display flex
    .nav-wrap-left
        width 1rem
        height 1rem
        text-align center
        float left
        .header_Bar
            font-size .4rem
    .navHeader
        flex 1
        width 3.7rem
        // float left
        height 1rem
        text-align center
        line-height 1rem
    .nav_right
        float right
        font-size .45rem
        text-align center
        margin-right .2rem
        .iconzhuye, .icon_sou
            display inline-block
            padding 0 .15rem
        // .icon_zhuye
            
</style>