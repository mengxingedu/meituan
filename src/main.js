import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
