<template>
    <div class="Recent_Con">
        <CityTitle :CityName='TypeName' />
        <CityList :cityList='hotCity' :isAddHistory='isAddHistory' :hehe='this.isAddHistory' />
    </div>
</template>

<script>
import CityTitle from './public/Title'
import CityList from './public/List'

export default {
    name : 'Recent',
    props : {
        TypeName : String,
        hotCity : [Array, Object],
        isAddHistory : {
            type : Boolean,
            default : true
        }
    },
    components : {
        CityTitle,
        CityList
    }
}
</script>

