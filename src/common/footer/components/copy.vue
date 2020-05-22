<template>
    <div class="copy_Con">
        <span class="footer-copyright-text">©2020 美团网 
            <span to="http://www.beian.miit.gov.cn/" target="_blank" rel="nofollow">
            京ICP证070791号</span>
        </span>
    </div>
</template>

<script>
export default {
    name : 'FooterCopy'
}
</script>

<style lang='stylus' scoped>
.copy_Con
    position relative
    background #fff
    color #999
    font-size .2rem
    text-align center
    padding-bottom .4rem
.copy_Con:after
    display block
    position absolute
    top .06rem
    left 0
    right 0
    z-index 0
    content : ''
    width 100%
    border-bottom .004rem solid #f0efed
.footer-copyright-text
    position relative 
    background #fff
    padding 0 .2rem
    z-index 2
</style>