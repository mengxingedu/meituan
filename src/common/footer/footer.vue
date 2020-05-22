<template>
    <div>
        <HomeBar />
        <HomeNav />
        <HomeLinks />
        <HomeCopy />
    </div>
</template>

<script>
import HomeBar from './components/bar'
import HomeNav from './components/nav'
import HomeLinks from './components/links'
import HomeCopy from './components/copy'

export default{
    name : 'HomeFooter',
    components : {
        HomeBar,
        HomeNav,
        HomeLinks,
        HomeCopy
    }
}    
</script>

<style lang="stylus" scoped>

</style>