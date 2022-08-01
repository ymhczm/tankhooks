<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 15:19:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-01 15:24:36
-->
<template>
  <div class="contain" style="display: flex; align-items: flex-start">
    <p>scrollY:{{ scrollY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useScrollPosition } from "../../../build/index.js";

const { scrollY } = useScrollPosition();
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
