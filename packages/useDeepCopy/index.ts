/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-07-22 16:23:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-04 11:39:18
 */

export default function (data: any) {
  if (Object.prototype.toString.call(data) === "[object Object]") {
    return JSON.parse(JSON.stringify(data));
  } else {
    return data;
  }
}
