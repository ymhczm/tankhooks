<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-05 16:32:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-05 16:33:07
-->

# useCookie

一个用来操作 Cookie 的 Hook 。

## 使用 Demo

```vue
<template></template>

<script lang="ts">
import { useSleep } from "tankhooks";

export default {
  setup() {
    // 获取cookie中的a
    useSleep(1000);
  },
};
</script>
```

useCookie 接受一个 key 是 cookie 中的键名。 修改返回的 state 可直接修改 cookie.

## 注意点

- state 等于 undefined 或者 null 可用于删除本地 Cookie 例：`state.value = undefined;`

## Api

```

interface Options{
    watch?: boolean,
    defaultValue?: string | undefined,
    expires?: number | Date,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: 'strict' | 'lax' | 'none'
}

const state = useCookieState(
  key: string,
  options?: Options,
)
```

### Params

| 参数    | 说明                                   | 类型    | 默认值 |
| :------ | :------------------------------------- | :------ | :----- |
| key     | 存储在本地 cookie 的 key 值            | string  | -      |
| options | 可选项，配置 cookie 属性，详见 Options | Options | -      |

### Result

| 参数  | 说明           | 类型     |
| :---- | :------------- | :------- |
| state | 本地 cookie 值 | Ref<any> |

### Options

| 参数         | 说明                                                 | 类型     | 默认值    |
| :----------- | :--------------------------------------------------- | :------- | :-------- | ------ | --- |
| defaultValue | 可选，定义 cookie 默认值，但不同步到本地 cookie      | string   | undefined |
| expires      | 可选，定义 cookie 存储有效时间                       | number   | Date      | -      |
| path         | 可选，定义 cookie 可用的路径                         | string   | /         |
| domain       | 可选，定义 cookie 可用的域，默认为 cookie 创建的域名 | string   | -         |
| secure       | 可选，cookie 传输是否需要 https 安全协议             | boolean  | -         |
| sameSite     | 可选，cookie 不能与跨域请求一起发送                  | `strict` | `lax`     | `none` | -   |
