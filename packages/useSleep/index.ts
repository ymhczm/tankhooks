/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-07-22 16:23:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-05 14:12:02
 */
export default function (ms: number) {
  const start = Date.now();
  const end = start + ms;
  while (true) {
    if (Date.now() > end) {
      return;
    }
  }
}
