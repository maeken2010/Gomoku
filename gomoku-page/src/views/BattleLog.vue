<template>
  <div class="battleLog">
    <battleLog
      :id="this.$route.params.id"
      :size="this.$route.params.battle.board_size"
      :player="{
        first_player: this.$route.params.battle.first_player,
        second_player: this.$route.params.battle.second_player
      }"
    ></battleLog>
  </div>
</template>

<script>
import battleLog from "@/components/battleLog.vue";

export default {
  components: {
    battleLog
  },
  beforeRouteEnter: function(to, from, next) {
    const { id, battle } = to.params;
    if (!id || !battle) {
      next("/");
    }
    next();
  }
};
</script>
