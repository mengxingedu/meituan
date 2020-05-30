<template>
    <div class="Footer_nav">
        <ul class="nav_list clearfix">
            <li>
                首页
            </li>
            <li>
                我的
            </li>
            <li>
                美团下载
            </li>
            <li>
                电脑版
            </li>
            <li>
                帮助
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'FooterNav'
}
</script>

<style lang='stylus' scoped>
.Footer_nav
    background #fff
    padding-bottom .4rem
    .nav_list
        text-align center
    .nav_list li 
        display inline-block
        height .22rem
        line-height .22rem
        font-size .2rem
        padding 0 .35rem
        border-right 1px solid #333
        color #FE8C00
    .nav_list li:last-child
        border none
</style>