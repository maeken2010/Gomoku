<template>
  <div class="info" :class="colorClass">
    <template v-if="this.isEnd">
      <p>end!</p>
      <p>winner: {{ this.getTurnPlayer(this.winner) }}</p>
    </template>
    <template v-if="!this.isEnd">
      <p>
        current turn player :
        {{ this.getTurnPlayer(this.turn) }}
      </p>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["turn", "winner"],
  computed: {
    ...mapGetters(["isEnd", "players"]),
    colorClass: function() {
      const colorList = ["", "first", "second"];
      if (this.winner !== 0) {
        return colorList[this.winner];
      }
      return colorList[this.turn];
    }
  },
  methods: {
    getTurnPlayer: function(turn) {
      return turn === 1
        ? this.players.first_player
        : this.players.second_player;
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  padding: 5px;
}

.first {
  border: solid 5px var(--first-color);
}

.second {
  border: solid 5px var(--second-color);
}
</style>
