<template>
  <div>
    <p v-if="this.isEnd">end!</p>
    <p>current turn : {{ this.turn === 1 ? "hogeRed" : "piyoBlue" }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["turn"],
  computed: {
    ...mapGetters(["isEnd"])
  }
};
</script>

<style scoped></style>
