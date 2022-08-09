<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:11:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-09 10:18:22
-->

# useCopy

copy 到剪切板

## 使用 Demo

```vue
<script lang="ts" setup>
import { useCopy } from "tankhooks";
const value ="";
finction async deepCopy () {
  const newData = await useDeepCopy('value');
  if (newData.value === "SUCCESS") {
    alert("copy到剪切板")
  }
}
</script>
```
