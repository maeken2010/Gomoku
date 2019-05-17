<template>
  <div>
    <!-- this.cellsは２重配列であり、要素が変わっても更新を検知してくれないっぽい -->
    <!-- keyを指定して、ターンが変わったら(cellが押されたら)更新するようにした -->
    <board
      :clickable="true"
      :cells="this.cells"
      :key="'turn' + this.turnNumber"
    ></board>
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
    ...mapGetters(["cells", "turn", "turnNumber"])
  },
  created: function() {
    this.initCells({ boardSize: this.pickedSize });
  },
  methods: {
    ...mapMutations(["initCells", "resetGame"]),
    initGame: function(size) {
      this.initCells({ boardSize: size });
      this.resetGame();
    }
  },
  watch: {
    pickedSize: function(size) {
      this.initGame(size);
    }
  }
};
</script>

<style scoped></style>
