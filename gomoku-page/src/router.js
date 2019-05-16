import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Gomoku from "./views/Gomoku.vue";
import About from "./views/About.vue";

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
      path: "/about",
      name: "about",
      components: About
    }
  ]
});
