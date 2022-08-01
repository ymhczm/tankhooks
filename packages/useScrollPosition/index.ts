/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-07-22 16:23:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-01 14:23:18
 */
import { onBeforeUnmount, onMounted, ref } from "vue";
import { throttle } from "lodash-es";

export default function () {
  const scrollY = ref<number>(-1);
  const scrollHandler = () => {
    scrollY.value = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  };
  onMounted(() => {
    window.addEventListener("scroll", throttle(scrollHandler, 100), true);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", scrollHandler, true);
  });
  return {
    scrollY,
  };
}
