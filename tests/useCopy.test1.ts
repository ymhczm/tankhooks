/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 21:22:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-17 20:52:36
 */

// @vitest-environment happy-dom

import { expect, test, vi } from "vitest";
import { useCopy } from "../packages";
describe("useCopy", () => {
  //  jest.spyOn(window.navigator.clipboard.writeText("str"), "onchange", "get").mockReturnValueOnce("granted");
  console.log(window, 11111);
  it("点击按钮copy内容", async () => {
    const value = "11111";
    const newData = await useCopy(value);
    console.log(newData, 111111);
    expect(newData).toBe("SUCCESS");
  });
});
