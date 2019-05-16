<template>
  <div>
    <div v-for="(record, i) in this.records" :key="i">
      {{ record }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters(["records"])
  },
  methods: {
    ...mapActions(["fetchBattleRecords"])
  },
  mounted: function() {
    this.fetchBattleRecords(this.id);
  }
};
</script>
