<template>
  <div>
    <div class="board">
      <div v-for="(celllist, n) in this.cells" :key="n">
        <div v-for="(cell, m) in celllist" :key="n + m">
          <cell
            class="cell"
            :color="cell"
            @click.prevent.native="changeColor(n, m, cell)"
          ></cell>
        </div>
      </div>
    </div>
    <game-info :turn="this.turn"></game-info>
    <div v-for="(s, i) in this.boardSizeList" :key="i">
      <input type="radio" :id="'radio' + s" :value="s" v-model="pickedSize" />
      <label :for="s">{{ s }}</label>
      <br />
    </div>
    <p>current size : {{ pickedSize }}</p>
  </div>
</template>

<script>
import isGameEnd from "./calc_gomoku.js";
import cell from "./Cell";
import gameInfo from "./GameInfo";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Gomoku",
  components: {
    cell,
    gameInfo
  },
  data: function() {
    return {
      turn: 1, // 先手：1 後手：2
      turnNumber: 1, // 現在のターン数
      boardSizeList: [5, 10, 20],
      pickedSize: 10
    };
  },
  computed: {
    ...mapGetters(["isEnd", "cells", "players"])
  },
  created: function() {
    this.initCells({ boardSize: this.pickedSize });
  },
  methods: {
    ...mapMutations(["changeGameEnd", "initCells", "changeCell", "pushRecord"]),
    ...mapActions(["finishGame"]),
    initGame: function(size) {
      this.initCells({ boardSize: size });
      this.turn = 1;
    },
    isGameEnd: function(cells) {
      return isGameEnd(cells);
    },
    changeColor: function(n, m, cell) {
      if (this.isEnd || cell !== 0) return;
      this.pushRecord({ n, m, turn: this.turn, turn_number: this.turnNumber });

      const cellColor = this.turn;
      this.changeCell({ n, m, cellColor });

      if (this.isGameEnd(this.cells)) {
        console.log("end!");

        const { first_player, second_player } = this.players;
        this.finishGame({
          battle_log: {
            result: this.turn,
            first_player,
            second_player
          }
        });
      }
      this.turnNumber += 1;
      this.turn = this.turn === 1 ? 2 : 1;
    }
  },
  watch: {
    pickedSize: function(size) {
      this.initGame(size);
    }
  }
};
</script>

<style scoped>
.board {
  display: flex;
}
.cell {
  width: 31px;
  height: 31px;
  border: solid 3px #000000;
}
</style>
