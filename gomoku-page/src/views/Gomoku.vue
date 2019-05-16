<template>
  <Gomoku></Gomoku>
</template>

<script>
import { Gomoku } from "@/components/Gomoku";

export default {
  name: "gomoku",
  components: {
    Gomoku
  },
  beforeRouteEnter: function(to, from, next) {
    const { first_player, second_player } = to.params;
    if (!first_player || !second_player) {
      next("/");
    }
    next();
  }
};
</script>
