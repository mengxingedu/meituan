<template>
    <div>
        
        <div class="ListCon">
            <span class="borders"></span>

            <!-- <h4 class="shou">A</h4> -->

            <P class="city_name">上海</P>
            <P class="city_name">上海</P>
            <P class="city_name">上海</P>
            <P class="city_name">上海</P>
            <P class="city_name">上海</P>
            <P class="city_name">上海</P>
            <P class="city_name">上海</P>
            <P class="city_name">上海</P>
        </div>
    </div>
    
</template>

<script>


export default {
    name : 'cityList'
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
        border-bottom 1px solid #ddd8ce
    .shou
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
        display inline-block
        width 25%
        height .8rem
        line-height .8rem
        margin 0
        text-align center
        border-bottom 1px solid #ddd8ce
</style>