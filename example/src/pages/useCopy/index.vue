<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 15:19:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-04 13:47:09
-->
<template>
  <div class="contain" style="display: flex; align-items: flex-start"></div>
</template>

<script lang="ts" setup>
import { useCopy } from "../../../build/index.js";
const data = {
  a: 1,
  b: {
    c: 2,
  },
};
console.log("data", data);
const newData = useCopy(data);
data.b.c = 3;
newData.a = 2;
console.log("data", data);
console.log("newData", newData);
</script>
<style>
.contain {
  height: 3000px;
}
p {
  margin: 800px auto;
  background: red;
  color: #fff;
}
</style>
