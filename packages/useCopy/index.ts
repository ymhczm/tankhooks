/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-07-22 16:23:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-09 10:15:54
 */

export default async function (str: string) {
  try {
    await navigator.clipboard.writeText(str);
    console.log("Page URL copied to clipboard");
    return "SUCCESS";
  } catch (err) {
    console.error("Failed to copy: ", err);
    return "ERROR";
  }
}
