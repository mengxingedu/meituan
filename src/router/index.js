import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home/home'

Vue.use(VueRouter)

export default new VueRouter({
    routes :[
        {
            'path' : '/',
            'name' : 'home',
            component : home
        }
    ]
})