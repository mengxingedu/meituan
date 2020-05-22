<template>
    <div class="title">
        {{CityName}}
    </div>
</template>

<script>
export default {
    name : 'CityTitle',
    props: {
        CityName : String
    }
}
</script>

<style lang='stylus' scoped>
.title
    font-size .3rem
    color #333
    margin .14rem .2rem

</style>