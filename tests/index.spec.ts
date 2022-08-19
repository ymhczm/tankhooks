/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 20:58:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-17 20:07:28
 */
// import { expect, test } from "vitest";
import { genNumber } from "../utils/test";
test("hello vitest", () => {
  expect(1 + 1).toBe(2);
});

test("genNumber vitest", () => {
  expect(genNumber(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
