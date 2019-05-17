<template>
  <div>
    <board :clickable="false" :cells="cells" :key="'turn' + turnNumber"></board>

    <button @click.prevent="nextRecord()">Next</button>
    <p>turn number : {{ this.turnNumber }}</p>
    <p>current player : {{ currentPlayer }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import board from "./Gomoku/Board";

export default {
  name: "battleLog",
  props: ["id", "size", "player"],
  components: {
    board
  },
  data: function() {
    return {
      cells: [],
      turn: 0,
      turnNumber: 0
    };
  },
  computed: {
    ...mapGetters(["records"]),
    currentPlayer: function() {
      if (this.turn === 0) return "";
      return this.turn === 1
        ? this.player.first_player
        : this.player.second_player;
    }
  },
  methods: {
    ...mapActions(["fetchBattleRecords"]),
    nextRecord: function() {
      const nextTurnNumber = this.turnNumber + 1;
      const turnInfo = this.records.filter(
        x => x.turn_number === nextTurnNumber
      );
      if (turnInfo.length === 0) return;
      const { x, y, turn } = turnInfo[0];
      this.turn = turn;
      this.turnNumber += 1;
      this.cells[x][y] = turn;
    }
  },
  created: function() {
    this.fetchBattleRecords(this.id);
    const initCells = Array.from(new Array(this.size), () =>
      new Array(this.size).fill(0)
    );
    this.cells = initCells;
  }
};
</script>
