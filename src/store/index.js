import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    counter:0,
    price:20
  },
  mutations: {
    "ADD_COUNTER"(state) {
      state.counter++;
    },
    "REDUCE_COUNTER"(state){
      state.counter--;
    },
    "COUNTER"(state,payload){
      state.counter = payload
    }
  },
  getters:{
    totals(state){
      return state.counter * state.price
    }
  },
  actions: {
    handleAsyncAction(store, payload) {
      setTimeout(() => {
        store.commit('COUNTER')
      },1000)
    },
  }
})

export default store