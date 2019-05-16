<template>
  <div>
    <input v-model="player1" placeholder="player1" />
    <input v-model="player2" placeholder="player2" />
    <p>{{ player1 }} vs. {{ player2 }}</p>
    <button @click.prevent="startGame()">Start!</button>
  </div>
</template>

<script>
import _ from "lodash";
import router from "@/router";
import { mapMutations } from "vuex";

export default {
  data: function() {
    return {
      player1: "",
      player2: ""
    };
  },
  methods: {
    ...mapMutations(["setPlayer"]),
    startGame: function() {
      if (this.player1 === "" || this.player2 === "") {
        alert("please enter name");
        return;
      }
      const [first_player, second_player] = _.shuffle([
        this.player1,
        this.player2
      ]);
      this.setPlayer({ first_player, second_player });
      router.push({ name: "gomoku", params: { first_player, second_player } });
    }
  }
};
</script>

<style scoped></style>
