import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/home'
import city from '../pages/city/city'
import position from '@/common/position/position'

Vue.use(VueRouter)

export default new VueRouter({
    routes :[
        {
            'path' : '/',
            'name' : 'home',
            component : home
        },
        {
            'path' : '/city',
            'name' : 'city',
            component : city
        },
        {
            'path' : '/position',
            'name' : 'position',
            component : position
        }
    ]
})