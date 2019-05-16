<template>
  <div>
    <p v-if="this.isEnd">end!</p>
    <p>
      current turn :
      {{ this.turn === 1 ? players.first_player : players.second_player }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["turn"],
  computed: {
    ...mapGetters(["isEnd", "players"])
  }
};
</script>

<style scoped></style>
