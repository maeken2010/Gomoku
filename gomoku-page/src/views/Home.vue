<template>
  <div class="home">
    <img alt="logo" src="../assets/gomoku.png" />
    <gameStartForm></gameStartForm>
    <router-link :to="{ name: 'battleLogs' }">record</router-link>
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
