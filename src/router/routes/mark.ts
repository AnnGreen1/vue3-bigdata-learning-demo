import { RouteRecordRaw } from "vue-router";

const mark: RouteRecordRaw[] = [
  {
    path: "/mark",
    name: "mark",
    component: () => import("../../views/Mark/MarkDemo.vue")
  },
  {
    path: "/mark/ref",
    name: "mark-ref",
    component: () => import("../../views/Mark/ref.vue")
  },
  {
    path: "/mark/computed",
    name: "mark-computed",
    component: () => import("../../views/Mark/computed.vue")
  },
  {
    path: "/mark/defineprops",
    name: "mark-defineprops",
    component: () => import("../../views/Mark/defineprops.vue")
  },
];

export default mark;