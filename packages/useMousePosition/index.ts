/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-07-22 16:23:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-07-22 16:46:15
 */
import { onBeforeUnmount, onMounted, ref } from "vue";
export default function () {
  const clickX = ref<number>(-1); // x 绑定为响应式数据
  const clickY = ref<number>(-1);
  const clickHandler = (event: MouseEvent) => {
    clickX.value = event.pageX;
    clickY.value = event.pageY;
  };
  onMounted(() => {
    window.addEventListener("click", clickHandler);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", clickHandler);
  });
  return {
    clickY,
    clickX,
  };
}
