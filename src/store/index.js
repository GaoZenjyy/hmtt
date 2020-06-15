import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义要保存的数据
  state: {
    user: JSON.parse(localStorage.getItem("user"))
  },
  // 定义修改 state 中的数据
  mutations: {
    // state 代表上面的数据
    // data 要修改的数据
    setUser(state, data) {
      state.user = data
      localStorage.setItem("user", JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
