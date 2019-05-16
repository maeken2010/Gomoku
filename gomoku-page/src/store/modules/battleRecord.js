import { fetchBattleLog, fetchRecords } from "@/lib/api/gomokuAPI";

const state = {
  battle: {},
  battles: [{ name: "", id: 0 }],
  records: []
};

const mutations = {
  setBattles: (state, { battles }) => {
    state.battles = battles;
  },
  setRecords: (state, { records }) => {
    state.records = records;
  }
};

const getters = {
  battles: state => {
    return state.battles;
  },
  records: state => {
    return state.records;
  }
};

const actions = {
  async fetchBattles({ commit }) {
    const battles = await fetchBattleLog();
    commit("setBattles", { battles });
  },
  async fetchBattleRecords({ commit }, battle_id) {
    const records = await fetchRecords(battle_id);
    commit("setRecords", { records });
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
