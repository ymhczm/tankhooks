<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 15:19:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-09 10:23:16
-->
<template>
  <div @click.stop="copy" class="contain" style="display: flex; align-items: flex-start">useSleep</div>
</template>

<script lang="ts" setup>
import { useSleep } from "../../../build/index.js";
console.log(1);
useSleep(111);
console.log(2);
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
