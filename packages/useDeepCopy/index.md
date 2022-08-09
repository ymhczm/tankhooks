<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:11:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-04 11:43:19
-->

# useDeepCopy

深 copy 一个对象。

## 使用 Demo

```vue
<script lang="ts" setup>
import { useDeepCopy } from "tankhooks";
const data = {
  a: 1,
  b: {
    c: 2,
  },
};
const newData = useDeepCopy();
</script>
```
