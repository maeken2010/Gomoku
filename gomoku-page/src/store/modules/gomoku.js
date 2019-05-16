import { postBattleLog } from "@/lib/api/gomokuAPI";

const state = {
  first_player: "",
  second_player: "",
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
  },
  setPlayer: (state, { first_player, second_player }) => {
    state.first_player = first_player;
    state.second_player = second_player;
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
  },
  players: state => {
    return {
      first_player: state.first_player,
      second_player: state.second_player
    };
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
