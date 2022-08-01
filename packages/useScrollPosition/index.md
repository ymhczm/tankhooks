<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:11:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-01 15:26:42
-->

# useScrollPosition

一个用来监听滚动的 Hook 。

## 使用 Demo

```vue
<template>
  <div class="hello">
    <p>value:{{ scrollY }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useScrollPosition } from "tankhooks";

const { scrollY } = useScrollPosition();
</script>
```
