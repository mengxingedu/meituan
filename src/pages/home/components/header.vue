<template>
    <div class="header_conten">
        <div class="navbar">
            <p class="nav-city">
                深圳 <span class="iconfont">&#xe673;</span>
            </p>
        </div>
        <div class="nav-input">
            <span class="iconfont search-icon">&#xe608;</span>
            <span class="input-con">请输入商家名、品类或者商圈...</span>
        </div>
        <div class="nav-user">
            <img :src="require('@/assets/images/icn_mine.png')" class="icn_mine" alt="">
        </div>
    </div>
</template>

<script>
export default{
    name : 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mxmins.styl'

    .header_conten
        height 1.01rem
        display flex
        background #FFD000
        .navbar
            text-align center
            .nav-city
                line-height 1.01rem 
                margin 0 .3rem
        .nav-input
            flex 1
            border-radius .06rem
            background rgba(255, 255, 255, .7)
            height .64rem
            line-height .64rem
            margin .18rem .1rem 0 0;
            color #999
            font-size .26rem
            ellipsis()
            .search-icon
                vertical-align -.03rem
                margin 0 .05rem 0 .1rem
            // .input-con
                
        .nav-user
            width .94rem
            line-height 1.01rem 
            text-align center
            .icn_mine
                width .48rem
                height .48rem
        
</style>