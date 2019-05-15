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
      turn: 1,
      boardSizeList: [5, 10, 20],
      pickedSize: 10
    };
  },
  computed: {
    ...mapGetters(["isEnd", "cells"])
  },
  created: function() {
    this.initCells({ boardSize: this.pickedSize });
  },
  methods: {
    ...mapMutations(["changeGameEnd", "initCells", "changeCell"]),
    ...mapActions(["postBattleLog"]),
    initGame: function(size) {
      this.initCells({ boardSize: size });
      this.turn = 1;
    },
    isGameEnd: function(cells) {
      return isGameEnd(cells);
    },
    changeColor: function(n, m, cell) {
      if (this.isEnd || cell !== 0) return;
      const cellColor = this.turn === 1 ? 1 : 2;

      this.changeCell({ n, m, cellColor });

      if (this.isGameEnd(this.cells)) {
        console.log("end!");
        this.postBattleLog({ winner: this.turn, name1: "a", name2: "b" });
      }

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
