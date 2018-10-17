import Vue from "vue";
import Router from "vue-router";
import Connexion from "@/components/Connexion/Connexion";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Connexion",
      component: Connexion
    }
  ]
});
