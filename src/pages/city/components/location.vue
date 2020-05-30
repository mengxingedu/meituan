<template>
    <div class="locationCon">
        <p class="city">定位城市：</p>
        <router-link class="city-name" to='/' tag='p'>
            <span class="iconfont icondingwei icon_local"></span>
            <span class="cityTil">{{ this.cities }}</span>
            {{this.letter}}
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name : 'location',
    computed : {
        ...mapState(['cities','letter'])
    }
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