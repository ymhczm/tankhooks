<!--
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:02:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-09 10:40:38
-->

<h1 align="center"><b>tankhooks</b></h1>
<h4 align="center">针对 Vue3 的实用Hooks集合</h4>

## 🔨 安装

<h4 align="center">
  <pre>npm i <a href="https://github.com/ymhczm/tankhooks">tankhooks</a> --save</pre>
  <i>or</i>
  <pre>yarn add <a href="https://github.com/ymhczm/tankhooks">tankhooks</a></pre>
  <pre>
  获取鼠标点击的位置
    import { useMousePosition } from "tankhooks";
    const { clickY, clickX } = useMousePosition();
  获取滚动的距离
    import { useScrollPosition } from "tankhooks";
    const { scrollY } = useScrollPosition();
  deepCopy对象
    import { useDeepCopy } from "tankhooks";
    const newData = useDeepCopy(data);
  线上进程暂停程序
    import { useSleep } from "tankhooks";
    useSleep(2000)
  点击按钮实现自动复制到剪切板,必须用户触发才可以，不可以直接调用js触发
    import { useCopy } from "tankhooks";
    const copy = async (value) => {
      const result = await useCopy(value);
      if(result==="SUCCESS") {
        console.log("复制到剪切板成功")
      } else if(result==="ERROR"){
        console.log("复制到剪切板失败")
      }
    };
  </pre>

</h4>

## 🏃 文档

<h4 align="center">
  <a href="">使用文档</a>
</h4>

<br>
