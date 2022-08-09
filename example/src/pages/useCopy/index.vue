<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 15:19:57
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-09 10:29:51
-->
<template>
  <div @click.stop="copy" class="contain" style="display: flex; align-items: flex-start">复制</div>
</template>

<script lang="ts" setup>
import { useCopy } from "../../../build/index.js";
const value = "测试copy";
const copy = async () => {
  const result = await useCopy(value);
  console.log(result);
};
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
