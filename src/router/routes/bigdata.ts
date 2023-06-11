import { RouteRecordRaw } from "vue-router";

// import Layout from "@/layouts";

const bigdata: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/Index.vue"),
    redirect: "/homepage",
    children: [
      {
        path: "/homepage",
        name: "homepage",
        component: () => import("@/views/homepage/Index.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "/more",
        name: "more",
        component: () => import("@/views/more/Index.vue"),
        meta: {
          title: "更多",
        },
      },
    ],
  },
];

export default bigdata;