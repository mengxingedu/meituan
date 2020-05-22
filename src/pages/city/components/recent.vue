<template>
    <div class="Recent_Con">
        <CityTitle CityName='最近访问' />
        <CityList />
    </div>
</template>

<script>
import CityTitle from './public/Title'
import CityList from './public/List'

export default {
    name : 'Recent',
    components : {
        CityTitle,
        CityList
    }
}
</script>

