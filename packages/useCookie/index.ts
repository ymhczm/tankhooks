/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:09:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-01 14:57:02
 */
import { ref, watch as vueWatch } from "vue";
import Cookies from "js-cookie";

interface Options {
  watch?: boolean;
  defaultValue?: string | undefined;
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

const defaultOptions = {
  watch: false,
  defaultValue: undefined,
};
const useCookie = (key: string, options?: Options) => {
  const { watch, defaultValue } = { ...defaultOptions, ...options };

  const state = ref(Cookies.get(key) || defaultValue);

  const setCookie = (value: any) => {
    Cookies.set(key, value, { ...options });
    state.value = value;
  };

  if (watch) {
    vueWatch(
      state,
      (value) => {
        if (value === null || value === undefined) {
          Cookies.remove(key);
          return;
        }
        setCookie(value);
      },
      {
        deep: true,
      }
    );
  }
  return state;
};

export default useCookie;
