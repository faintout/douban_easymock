import Vue from 'vue'
import VueRouter from 'vue-router'
import Hot from '@/views/hot'
import Detail from '@/views/detail'
import Movie from '@/views/movie'
import Top from '@/views/top'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/hot' },
    { path: '/hot', component: Hot },
    { path: '/detail/:id', component: Detail },
    { path: '/movie', component: Movie },
    { path: '/top', component: Top }
  ]
})
