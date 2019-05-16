import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Gomoku from "./views/Gomoku.vue";
import About from "./views/About.vue";
import BattleLogs from "./views/BattleLogs.vue";
import BattleLog from "./views/BattleLog.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/gomoku",
      name: "gomoku",
      component: Gomoku
    },
    {
      path: "/battle_logs",
      name: "battleLogs",
      component: BattleLogs
    },
    {
      path: "/battle_log/:id",
      name: "battleLog",
      component: BattleLog
    },
    {
      path: "/about",
      name: "about",
      components: About
    }
  ]
});
