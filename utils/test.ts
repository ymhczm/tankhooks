/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 21:52:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-15 21:52:56
 */
export function genNumber(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
