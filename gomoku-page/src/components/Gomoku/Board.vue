<template>
  <div class="board">
    <div v-for="(celllist, n) in this.cells" :key="n">
      <div v-for="(cell, m) in celllist" :key="n + m">
        <cell
          class="cell"
          :color="cell"
          @click.prevent.native="clickEvent(n, m, cell)"
        ></cell>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import isGameEnd from "./calc_gomoku.js";
import cell from "./Cell";

export default {
  props: ["clickable", "cells"],
  components: {
    cell
  },
  computed: {
    ...mapGetters(["isEnd", "players", "turn", "turnNumber"])
  },
  methods: {
    ...mapMutations([
      "changeGameEnd",
      "changeCell",
      "pushRecord",
      "toggleTurn",
      "incrementTurnNumber"
    ]),
    ...mapActions(["finishGame"]),
    isGameEnd: function(cells) {
      return isGameEnd(cells);
    },
    clickEvent: function(n, m, cell) {
      if (!this.clickable || this.isEnd || cell !== 0) return;
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
      this.incrementTurnNumber();
      this.toggleTurn();
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
