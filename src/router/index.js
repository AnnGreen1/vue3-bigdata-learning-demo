import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      components: registerLayout,
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
