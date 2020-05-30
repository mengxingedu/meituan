<template>
    <ul class="Alphabet clearfix">
        <li class="item" 
            v-for='item of hlphabetList' 
            :key="item.name"
            @click='handleClick(item.name)'
        >
        {{item.name}}
        </li>
    </ul>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
    name : 'CityAlphabet',
    props : {
        hlphabetList : Array
    },
    methods : {
        handleClick (val) {
            this.$emit('aipha', val)
            // this.setLetter(val);
            // this.setLetter(this.$refs[val][0]);
        },
        // ...mapMutations(['setLetter'])
    }
}
</script>

<style lang='stylus' scoped>
.Alphabet
    border 1px solid #DDD8CE
    border-bottom none;
    background #fff
    margin 0 .2rem
    .item
        width 20%
        height .8rem
        text-align center
        line-height .8rem
        color #FE8C00
        font-size .28rem
        float left
</style>