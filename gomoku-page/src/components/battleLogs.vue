<template>
  <div>
    <div v-for="(battle, i) in this.battles" :key="i">
      <router-link :to="{ name: 'battleLog', params: { id: battle.id } }">
        {{ battle.first_player }} vs {{ battle.second_player }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["battles"])
  },
  methods: {
    ...mapActions(["fetchBattles"])
  },
  created: function() {
    this.fetchBattles();
  }
};
</script>
