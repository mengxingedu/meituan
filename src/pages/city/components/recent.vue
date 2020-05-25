<template>
    <div class="Recent_Con">
        <CityTitle :CityName='TypeName' />
        <CityList :cityList='cityList' />
    </div>
</template>

<script>
import CityTitle from './public/Title'
import CityList from './public/List'

export default {
    name : 'Recent',
    props : {
        TypeName : String,
        cityList : [Array, Object]
    },
    components : {
        CityTitle,
        CityList
    }
}
</script>

