import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    //方法默认带有state对象
    increment(state){
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
