<template>
  <div class="gomoku">
    <!-- this.cellsは２重配列であり、要素が変わっても更新を検知してくれないっぽい -->
    <!-- keyを指定して、ターンが変わったら(cellが押されたら)更新するようにした -->
    <board
      :clickable="true"
      :cells="this.cells"
      :key="'turn' + this.turnNumber"
    ></board>
    <div>
      <game-info :turn="this.turn" :winner="this.winner"></game-info>
      <div>
        Select Board Size:
        <div v-for="(s, i) in this.boardSizeList" :key="i">
          <input
            type="radio"
            :id="'radio' + s"
            :value="s"
            v-model="pickedSize"
          />
          <label :for="s">{{ s }}</label>
        </div>
      </div>
      <p>current size : {{ pickedSize }}</p>
    </div>
  </div>
</template>

<script>
import board from "./Board";
import gameInfo from "./GameInfo";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Gomoku",
  components: {
    board,
    gameInfo
  },
  data: function() {
    return {
      boardSizeList: [5, 10, 20],
      pickedSize: 10
    };
  },
  computed: {
    ...mapGetters(["cells", "turn", "turnNumber", "winner"])
  },
  created: function() {
    this.initGame({ boardSize: this.pickedSize });
  },
  methods: {
    ...mapMutations(["initCells", "resetGame", "initGame"])
  },
  watch: {
    pickedSize: function(size) {
      this.initGame({ boardSize: size });
    }
  }
};
</script>

<style scoped>
.gomoku {
  display: flex;
}
</style>
