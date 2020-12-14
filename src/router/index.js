import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/find",
    },
    {
      path: "/find",
      // redirect: '/shouye/nowplaying',
      component: () => import("../views/find/index"),
    },
    {
      path: "/boke",
      component: () => import("../views/boke/index"),
    },
    {
      path: "/mine",
      component: () => import("../views/mine/index"),
    },
    {
      path: "/kge",
      component: () => import("../views/kge/index"),
    },
    {
      path: "/kge",
      component: () => import("../views/kge/index"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
