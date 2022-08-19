/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 21:22:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-17 20:08:00
 */
// import { expect, test } from "vitest";
import { useDeepCopy } from "../packages";
describe("useDeepCopy", () => {
  it("深copy的值不相同", () => {
    const data = { a: 2 };
    const newData = useDeepCopy(data);
    expect(newData).not.toBe(data);
  });
});
