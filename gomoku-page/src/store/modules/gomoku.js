import { postBattleLog } from "@/lib/api/gomokuAPI";

const state = {
  cells: [],
  isEnd: false
};

const mutations = {
  changeGameEnd: state => {
    state.isEnd = true;
  },
  initCells: (state, { boardSize }) => {
    state.cells = Array.from(new Array(boardSize), () =>
      new Array(boardSize).fill(0)
    );
    state.isEnd = false;
  },
  changeCell: (state, { n, m, cellColor }) => {
    state.cells[n][m] = cellColor;
  }
};

const getters = {
  isEnd: state => {
    return state.isEnd;
  },
  cells: state => {
    return state.cells;
  },
  boardSize: state => {
    return state.cells.length;
  }
};

const actions = {
  async postBattleLog({ commit }, payload) {
    await postBattleLog(payload);
    commit("changeGameEnd");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
