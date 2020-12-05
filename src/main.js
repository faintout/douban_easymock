import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import movieList from './components/movie-list'
import '@/assets/css/global.css'
import '@/assets/fonts/iconfont.css'
import $ from 'jquery'
Vue.config.productionTip = false

// Vue.component('movie-list', movieList)
Vue.component('movie-list', movieList)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
