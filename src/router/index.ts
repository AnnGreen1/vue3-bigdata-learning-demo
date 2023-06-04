import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from "vue-router";

import commonRoute from "./routes/commonroute";
import typescriptaxios from "./routes/typescriptaxios";
import bigdata from "./routes/bigdata";


const router = createRouter({
     // createWebHashHistory:hash模式; createWebHistory:历史模式; createMemoryHistory:ssr
  history: createWebHashHistory(),
  routes: [ ...commonRoute,...typescriptaxios,...bigdata] as unknown as RouteRecordRaw[]
});
export default router