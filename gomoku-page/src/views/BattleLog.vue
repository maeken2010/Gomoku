<template>
  <div class="battleLog">
    <battleLog :id="this.$route.params.id"></battleLog>
  </div>
</template>

<script>
import battleLog from "@/components/battleLog.vue";

export default {
  components: {
    battleLog
  },
  beforeRouteEnter: function(to, from, next) {
    const { id } = to.params;
    if (!id) {
      next("/");
    }
    next();
  }
};
</script>
