import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    image: null
  },
  mutations: {
    updateData(state, data) {
      state.data = data.posts,
        state.image = data.image ? data.image : state.umage
    },
  },
  actions: {
    async fetchData(context) {
      const { data } = await axios.get('http://localhost:5000/')
      data.image = 'data:image/png;base64,' + data.image;
      context.commit('updateData', data)
    },
  },
  getters: {
    getData(state) {
      return state.data
    },
    getImage(state) {
      return state.image
    }
  }
})
