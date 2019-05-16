<template>
  <div class="home">
    <img alt="logo" src="../assets/gomoku.png" />
    <gameStartForm></gameStartForm>
  </div>
</template>

<script>
import gameStartForm from "@/components/gameStartForm.vue";

export default {
  name: "home",
  components: {
    gameStartForm
  }
};
</script>
