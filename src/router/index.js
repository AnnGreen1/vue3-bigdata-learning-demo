import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layouts";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component:  () => import("../views/home/index.vue"),
        },
        {
          path: "/more",
          name: "more",
          component: () => import("../views/more/index.vue"),
        },
      ],
    },
  ],
});

export default router;
