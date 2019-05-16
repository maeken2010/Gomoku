import Vue from "vue";
import Vuex from "vuex";

import gomoku from "./modules/gomoku";
import battleRecord from "./modules/battleRecord";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gomoku,
    battleRecord
  }
});
