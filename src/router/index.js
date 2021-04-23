import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ruta-nombrada",
    name: "RutaNombrada",
    component: () =>
      import(
        /* webpackChunkName: "ruta-nombrada" */ "../views/RutaNombrada.vue"
      ),
  },
  {
    path: "/about/:id",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    props: () => {
      return {
        nombre: "Gonzalo",
        edad: 31,
      };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
