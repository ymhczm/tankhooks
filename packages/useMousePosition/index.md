<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:11:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-01 14:20:44
-->

# useMousePosition

一个用来监听鼠标点击的 Hook 。

## 使用 Demo

```vue
<template>
  <div>
    <p>clickX:{{ clickX }}</p>
    <p>clickY:{{ clickY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMousePosition } from "thooks";

const { clickY, clickX } = useMousePosition();
</script>
```
