import Vue from 'vue'
import Vuex from 'vuex'

import gomoku from './modules/gomoku'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gomoku
  }
})
