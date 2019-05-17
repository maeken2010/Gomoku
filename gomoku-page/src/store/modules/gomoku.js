import { postBattleLog, postRecords } from "@/lib/api/gomokuAPI";

const state = {
  first_player: "",
  second_player: "",
  cells: [],
  records: [],
  turn: 1, // 初手：1 後手：2
  turn_number: 1,
  winner: 0,
  isEnd: false
};

const mutations = {
  changeGameEnd: (state, result) => {
    state.winner = result;
    state.isEnd = true;
  },
  initCells: (state, { boardSize }) => {
    state.cells = Array.from(new Array(boardSize), () =>
      new Array(boardSize).fill(0)
    );
    state.isEnd = false;
    state.winner = 0;
  },
  changeCell: (state, { n, m, cellColor }) => {
    state.cells[n][m] = cellColor;
  },
  setPlayer: (state, { first_player, second_player }) => {
    state.first_player = first_player;
    state.second_player = second_player;
  },
  pushRecord: (state, { n, m, turn, turn_number }) => {
    state.records.push({ x: n, y: m, turn, turn_number });
  },
  toggleTurn: state => {
    state.turn = state.turn === 1 ? 2 : 1;
  },
  incrementTurnNumber: state => {
    state.turn_number += 1;
  },
  resetGame: state => {
    state.turn = 1;
    state.turnNumber = 1;
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
  },
  turn: state => {
    return state.turn;
  },
  turnNumber: state => {
    return state.turn_number;
  },
  winner: state => {
    return state.winner;
  }
};

const actions = {
  async finishGame({ commit, state }, payload) {
    const { battle_log } = payload;
    const { id } = await postBattleLog(battle_log);
    await postRecords(id, state.records);
    commit("changeGameEnd", battle_log.result);
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
