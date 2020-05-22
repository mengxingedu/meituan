<template>
    <div class="locationCon">
        <p class="city">定位城市：</p>
        <p class="city-name">
            <span class="iconfont icondingwei icon_local"></span>
            <span class="cityTil">重庆</span>
        </p>
    </div>
</template>

<script>
export default {
    name : 'location'
}
</script>

<style lang='stylus' scoped>
    .locationCon
        border 1px solid #DDD8CE
        background #FDFDFC
        margin .2rem .2rem .4rem
        padding .2rem
        .city
            display inline-block
            color #333
        .city-name
            display inline-block
        .icon_local
            color #FFD000
            vertical-align -.02rem
        .cityTil
            color #222

</style>