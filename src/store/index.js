import Vue from 'vue'
import Vuex from 'vuex'
// import jsonp from 'jsonp'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    title: '',
    list: [],
    detail: []
  },
  mutations: {
    // 更新数据
    updatedDate (state, payload) {
      state.title = payload.title
      state.list = payload.list
    },
    // 获取详情
    updateDetail (state, payload) {
      state.detail = payload.detail
      state.title = payload.title
    }
  },
  actions: {
    getList (context, id) {
      // jsonp(`https://www.easy-mock.com/mock/5fcb28154ae32e320c62c8e3/douban/v2/movie/${id}`, (error, data) => {
      //   if (error) return
      //   context.commit('updatedDate', { title: data.title, list: data.subjects })
      // })
      $.ajax({
        url: 'https://www.easy-mock.com/mock/5fcb28154ae32e320c62c8e3/douban/v2/movie/' + id,
        type: 'get',
        success: (result) => {
          console.log(result)

          context.commit('updatedDate', { title: result.data.title, list: result.data.subject })
        }

      })
    },
    getDetail (context, id) {
      // jsonp(`http://t.yushu.im/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`, (error, data) => {
      //   if (error) return
      //   // console.log(data)
      //   context.commit('updateDetail', { title: data.title, detail: data })
      // })
      $.ajax({
        url: 'https://www.easy-mock.com/mock/5fcb28154ae32e320c62c8e3/douban/v2/movie/detail?' + id,
        type: 'GET',
        success: (result) => {
          console.log(result)
          context.commit('updateDetail', { title: result.data.title, detail: result.data })
        }
      })
    }
  }
})
