/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 20:53:28
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-17 20:28:59
 */
// vite.config.ts
import { defineConfig } from "vitest/config";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  test: {
    // environment: "jsdom",
    globals: true,
    transformMode: {
      web: [/.tsx$/],
    },
  },
  plugins: [vueJsx(), vue()],
});
