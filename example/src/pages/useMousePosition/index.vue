<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:11:21
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-04 13:44:21
-->
<template>
  <div style="display: flex; align-items: flex-start">
    <p>clickX:{{ clickX }}</p>
    <p>clickY:{{ clickY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMousePosition } from "../../../build/index.js";

const { clickY, clickX } = useMousePosition();
</script>
