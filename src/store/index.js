import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations : {
        setCities(state, val){
            localStorage.setItem('cities', val);
            state.cities = val;
        },
        setRecentVisit(state, val){
            state.recentVisit.unshift(val);
            localStorage.setItem('historyList', JSON.stringify(state.recentVisit))
        }
    }
})