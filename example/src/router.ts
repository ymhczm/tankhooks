/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:02:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-01 15:19:01
 */
import { createRouter as _createRouter, createWebHistory } from "vue-router";

export function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        component: () => import("./pages/useCookie/index.vue"),
      },

      {
        path: "/useCookie",
        component: () => import("./pages/useCookie/index.vue"),
      },
      {
        path: "/useMousePosition",
        component: () => import("./pages/useMousePosition/index.vue"),
      },
      {
        path: "/useScrollPosition",
        component: () => import("./pages/useScrollPosition/index.vue"),
      },
    ],
  });
}
