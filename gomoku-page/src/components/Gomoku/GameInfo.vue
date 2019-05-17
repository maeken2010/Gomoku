<template>
  <div class="info" :class="colorClass">
    <p v-if="this.isEnd">end!</p>
    <p>
      current turn player :
      {{ this.turn === 1 ? players.first_player : players.second_player }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["turn"],
  computed: {
    ...mapGetters(["isEnd", "players"]),
    colorClass: function() {
      return ["", "first", "second"][this.turn];
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
