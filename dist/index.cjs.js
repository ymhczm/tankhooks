'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * 防抖
 * @param fn
 * @param delay
 * @returns
 */
var debounce = function (fn, delay) {
    var timer = null;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(function () {
            // @ts-ignore
            fn.call.apply(fn, __spreadArray([_this], __read(args), false));
        }, delay);
    };
};
/**
 * 节流
 * @param fn
 * @param delay
 * @returns
 */
var throttle = function (fn, delay) {
    var oldNow = Date.now();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currNow = Date.now();
        if (currNow - oldNow < delay)
            return;
        oldNow = currNow;
        // @ts-ignore
        fn.call.apply(fn, __spreadArray([this], __read(args), false));
    };
};
/**
 * 防抖+节流
 * @param fn
 * @param DBdelay
 * @param TRdelay
 * @returns
 */
var throttleAndDeBounce = function (fn, DBdelay, TRdelay) {
    var oldNow = Date.now();
    var timer = null;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currNow = Date.now();
        if (currNow - oldNow < TRdelay) {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(function () {
                oldNow = currNow;
                // @ts-ignore
                fn.call.apply(fn, __spreadArray([_this], __read(args), false));
            }, DBdelay);
            return;
        }
        oldNow = currNow;
        // @ts-ignore
        fn.call.apply(fn, __spreadArray([this], __read(args), false));
    };
};
/**
 * 按照类型格式数据的常量Map
 */
var TypeSerializers = {
    boolean: {
        read: function (v) { return v != null ? v === 'true' : null; },
        write: function (v) { return String(v); },
    },
    object: {
        read: function (v) { return v ? JSON.parse(v) : null; },
        write: function (v) { return JSON.stringify(v); },
    },
    number: {
        read: function (v) { return v != null ? Number.parseFloat(v) : null; },
        write: function (v) { return String(v); },
    },
    any: {
        read: function (v) { return (v != null && v !== 'null') ? v : null; },
        write: function (v) { return String(v); },
    },
    string: {
        read: function (v) { return v != null ? v : null; },
        write: function (v) { return String(v); },
    },
};
/**
 * 获取数据类型
 * @param defaultValue
 * @returns
 */
var getValueType = function (defaultValue) {
    return defaultValue == null
        ? 'any'
        : typeof defaultValue === 'boolean'
            ? 'boolean'
            : typeof defaultValue === 'string'
                ? 'string'
                : typeof defaultValue === 'object'
                    ? 'object'
                    : Array.isArray(defaultValue)
                        ? 'object'
                        : !Number.isNaN(defaultValue)
                            ? 'number'
                            : 'any';
};

/**
 * loading的延迟计算
 * @param startTime
 * @param loadingDelay
 * @param args
 * @returns
 */
var loadingDelayTimer = null;
var loadingDelayAsync = function (loadingDelay) {
    clearLoadingDelayTimer();
    return new Promise(function (resolve) {
        loadingDelayTimer = setTimeout(function () { return resolve(loadingDelayTimer); }, Math.max(loadingDelay, 0));
    });
};
/**
 * 取消loading延迟计算Timer
 */
var clearLoadingDelayTimer = function () {
    if (loadingDelayTimer) {
        clearTimeout(loadingDelayTimer);
    }
};

var defaultParams = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};
/**
 * 使用fetch发起请求
 * @param Params
 * @returns FetchData
 */
function fetchData(p) {
    var params = _assign(_assign({}, defaultParams), p);
    return fetch(params.url, params);
}

var argsSymbolKey = 'argsKey';
var serveiceProxy = function (service, args, reqParamsCache) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                if (args.length > 0) {
                    reqParamsCache.put(argsSymbolKey, args);
                }
                if (!(Object.prototype.toString.call(service) === "[object Function]")) return [3 /*break*/, 2];
                return [4 /*yield*/, service.apply(void 0, __spreadArray([], __read(args), false))];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                if (!(Object.prototype.toString.call(service) === "[object Object]")) return [3 /*break*/, 4];
                return [4 /*yield*/, fetchData(service)];
            case 3:
                response = _a.sent();
                return [2 /*return*/, response.json()];
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                return [2 /*return*/, Promise.reject(error_1)];
            case 6: return [2 /*return*/];
        }
    });
}); };

/**
 * 执行轮询
 */
var Polling = /** @class */ (function () {
    function Polling() {
        this.isActive = false;
        this.pollingInterval = 0;
        this.pollingWhenHidden = true;
    }
    Polling.prototype.run = function (run, pollingInterval, pollingWhenHidden) {
        this.isActive = true;
        this.pollingInterval = pollingInterval;
        this.pollingWhenHidden = pollingWhenHidden;
        this.task(run);
    };
    Polling.prototype.cancel = function () {
        this.isActive = false;
    };
    Polling.prototype.task = function (run) {
        var _this = this;
        setTimeout(function () {
            if (!_this.isActive)
                return;
            if (_this.pollingWhenHidden) {
                run();
            }
            else {
                if (!document.hidden) {
                    run();
                }
            }
            _this.task(run);
        }, this.pollingInterval);
    };
    return Polling;
}());
var Polling$1 = new Polling();

/**
 * 监听屏幕是否聚焦
 * @param run
 * @param focusTimespan
 */
var visibility = function (run, focusTimespan) {
    var handler = function () {
        if (!document.hidden) {
            run();
        }
    };
    if (focusTimespan !== undefined && typeof (focusTimespan) === 'number') {
        handler = throttle(handler, focusTimespan);
    }
    document.addEventListener('visibilitychange', handler);
};

var handleResCache = function (data, resCache, cacheKey, cacheTime) {
    if (cacheKey) {
        if (resCache.has(cacheKey)) {
            resCache.put(cacheKey, data);
            return;
        }
        resCache.put(cacheKey, data, cacheTime);
    }
};

var MemoryCache = /** @class */ (function () {
    function MemoryCache(options) {
        this.memoryCache = new Map();
        this.timer = {};
        this.maxCache = (options === null || options === void 0 ? void 0 : options.maxCache) || 1000;
    }
    /**
     * 增加缓存
     * @param key
     * @param value
     * @param time
     * @param timeoutCallback
     */
    MemoryCache.prototype.put = function (key, value, time, timeoutCallback) {
        var _this = this;
        if (!key || !value) {
            throw new Error('key & value is required');
        }
        if (this.size() >= this.maxCache) {
            this.del(__spreadArray([], __read(this.memoryCache), false)[0][0]);
        }
        this.memoryCache.set(key, value);
        if (time
            && typeof time === 'number'
            && time > 0) {
            this.timer[key] = setTimeout(function () {
                _this.del(key);
                delete _this.timer[key];
                timeoutCallback && timeoutCallback();
            }, time);
        }
    };
    /**
     * 获取缓存
     * @param key
     * @returns
     */
    MemoryCache.prototype.get = function (key) {
        if (!this.has(key))
            return null;
        return this.memoryCache.get(key);
    };
    /**
     * 判断是否有缓存
     * @param key
     * @returns
     */
    MemoryCache.prototype.has = function (key) {
        return this.memoryCache.has(key);
    };
    /**
     * 删除缓存
     * @param key
     * @returns
     */
    MemoryCache.prototype.del = function (key) {
        if (!this.has(key))
            return;
        if (this.timer[key]) {
            clearTimeout(this.timer[key]);
            delete this.timer[key];
        }
        this.memoryCache.delete(key);
    };
    /**
     * 清除缓存
     * @returns
     */
    MemoryCache.prototype.clear = function () {
        if (this.size() <= 0)
            return;
        this.memoryCache.clear();
        for (var i in this.timer) {
            clearTimeout(this.timer[i]);
            delete this.timer[i];
        }
    };
    /**
     * 获取缓存条数
     * @returns
     */
    MemoryCache.prototype.size = function () {
        return this.memoryCache.size;
    };
    return MemoryCache;
}());

// service请求参数缓存
var reqCache = new MemoryCache();
// 请求参数缓存
var resCache = new MemoryCache();
// 默认参数
var defaultOptions$7 = {
    manual: false,
    initialData: undefined,
    onSuccess: function () { },
    onError: function () { },
    formatResult: function (data) { return data; },
    defaultParams: [],
    pollingInterval: 0,
    pollingWhenHidden: true,
    ready: undefined,
    debounceInterval: undefined,
    throttleInterval: undefined,
    refreshOnWindowFocus: false,
    focusTimespan: undefined,
    loadingDelay: 0,
    refreshDeps: [],
    cacheTime: 300000,
    staleTime: 0,
};
var useRequest = function (service, options) {
    var _a = _assign(_assign({}, defaultOptions$7), options), manual = _a.manual, initialData = _a.initialData, onSuccess = _a.onSuccess, onError = _a.onError, formatResult = _a.formatResult, defaultParams = _a.defaultParams, pollingInterval = _a.pollingInterval, pollingWhenHidden = _a.pollingWhenHidden, ready = _a.ready, debounceInterval = _a.debounceInterval, throttleInterval = _a.throttleInterval, refreshOnWindowFocus = _a.refreshOnWindowFocus, focusTimespan = _a.focusTimespan, loadingDelay = _a.loadingDelay, refreshDeps = _a.refreshDeps, cacheKey = _a.cacheKey, cacheTime = _a.cacheTime, staleTime = _a.staleTime;
    var data = vue.shallowRef(initialData);
    var error = vue.ref(undefined);
    var loading = vue.ref(false);
    var latestTime = vue.ref(0);
    // 取消轮询
    var cancel = function () { return Polling$1.cancel(); };
    // 执行轮询
    var pollingRun = function () {
        if (pollingInterval < 4 || Polling$1.isActive) {
            return;
        }
        Polling$1.run(run, pollingInterval, pollingWhenHidden);
    };
    // 执行网络请求
    var run = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 请求开始时间
        var reqTime = +new Date();
        // 判断开启缓存 && 有缓存，先返回缓存
        // 缓存修改并不会阻止顺序执行，service请求会继续发出
        // 也就是所谓SWR能力
        if (cacheKey && resCache.has(cacheKey)) {
            data.value = resCache.get(cacheKey);
            if (latestTime.value + staleTime > reqTime) {
                return;
            }
        }
        else if (loadingDelay > 0) {
            loadingDelayAsync(loadingDelay).then(function () { return loading.value = true; });
        }
        else {
            loading.value = true;
        }
        // 更新最新一次请求开始时间
        latestTime.value = reqTime;
        serveiceProxy(service, args, reqCache).then(function (responseData) {
            clearLoadingDelayTimer();
            responseData = formatResult(responseData);
            data.value = responseData;
            loading.value = false;
            onSuccess(responseData, args);
            // 处理缓存
            handleResCache(responseData, resCache, cacheKey, cacheTime);
        }).catch(function (e) {
            loading.value = false;
            error.value = e;
            onError(error.value, args);
        });
        // 非激活状态执行轮询
        pollingRun();
    };
    var refresh = function () {
        var args = reqCache.get(argsSymbolKey) || [];
        run.apply(void 0, __spreadArray([], __read(args), false));
    };
    // 是否自动执行
    if (!manual && ready === undefined) {
        // 是否携带默认参数
        defaultParams.length > 0 ? run.apply(void 0, __spreadArray([], __read(defaultParams), false)) : run();
        // 是否执行轮询
        pollingRun();
    }
    //监听依赖请求是否执行
    vue.watch(function () { return ready; }, function (curr) {
        if ((curr === null || curr === void 0 ? void 0 : curr.value) === true) {
            refresh();
        }
    }, { deep: true });
    //多个监听依赖请求是否执行
    vue.watch(refreshDeps, function () { return refresh(); }, { deep: true });
    // 防抖+节流
    if (debounceInterval !== undefined
        && throttleInterval !== undefined
        && typeof (debounceInterval) === 'number'
        && typeof (throttleInterval) === 'number') {
        run = throttleAndDeBounce(run, debounceInterval, throttleInterval);
    }
    else {
        // 防抖
        if (debounceInterval !== undefined
            && typeof (debounceInterval) === 'number') {
            run = debounce(run, debounceInterval);
        }
        // 节流
        if (throttleInterval !== undefined
            && typeof (throttleInterval) === 'number') {
            run = throttle(run, throttleInterval);
        }
    }
    // 屏幕聚焦重新请求
    if (refreshOnWindowFocus === true) {
        visibility(refresh, focusTimespan);
    }
    // 突变改变data值
    var mutate = function (state) {
        data.value = state;
    };
    // 返回值
    var res = {
        data: data,
        error: error,
        run: run,
        refresh: refresh,
        loading: loading,
        cancel: cancel,
        mutate: mutate
    };
    return res;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var dayjs_min = {exports: {}};

(function (module, exports) {
  !function (t, e) {
    module.exports = e() ;
  }(commonjsGlobal, function () {

    var t = 1e3,
        e = 6e4,
        n = 36e5,
        r = "millisecond",
        i = "second",
        s = "minute",
        u = "hour",
        a = "day",
        o = "week",
        f = "month",
        h = "quarter",
        c = "year",
        d = "date",
        $ = "Invalid Date",
        l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    },
        m = function m(t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
        g = {
      s: m,
      z: function z(t) {
        var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, f),
            s = n - i < 0,
            u = e.clone().add(r + (s ? -1 : 1), f);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function a(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function p(t) {
        return {
          M: f,
          y: c,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: h
        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(t) {
        return void 0 === t;
      }
    },
        D = "en",
        v = {};

    v[D] = M;

    var p = function p(t) {
      return t instanceof _;
    },
        S = function S(t, e, n) {
      var r;
      if (!t) return D;
      if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t);else {
        var i = t.name;
        v[i] = t, r = i;
      }
      return !n && r && (D = r), r || !n && D;
    },
        w = function w(t, e) {
      if (p(t)) return t.clone();
      var n = "object" == _typeof(e) ? e : {};
      return n.date = t, n.args = arguments, new _(n);
    },
        O = g;

    O.l = S, O.i = p, O.w = function (t, e) {
      return w(t, {
        locale: e.$L,
        utc: e.$u,
        x: e.$x,
        $offset: e.$offset
      });
    };

    var _ = function () {
      function M(t) {
        this.$L = S(t.locale, null, !0), this.parse(t);
      }

      var m = M.prototype;
      return m.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
              n = t.utc;
          if (null === e) return new Date(NaN);
          if (O.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);

          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match(l);

            if (r) {
              var i = r[2] - 1 || 0,
                  s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }

          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, m.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, m.$utils = function () {
        return O;
      }, m.isValid = function () {
        return !(this.$d.toString() === $);
      }, m.isSame = function (t, e) {
        var n = w(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, m.isAfter = function (t, e) {
        return w(t) < this.startOf(e);
      }, m.isBefore = function (t, e) {
        return this.endOf(e) < w(t);
      }, m.$g = function (t, e, n) {
        return O.u(t) ? this[e] : this.set(n, t);
      }, m.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function () {
        return this.$d.getTime();
      }, m.startOf = function (t, e) {
        var n = this,
            r = !!O.u(e) || e,
            h = O.p(t),
            $ = function $(t, e) {
          var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
          return r ? i : i.endOf(a);
        },
            l = function l(t, e) {
          return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
        },
            y = this.$W,
            M = this.$M,
            m = this.$D,
            g = "set" + (this.$u ? "UTC" : "");

        switch (h) {
          case c:
            return r ? $(1, 0) : $(31, 11);

          case f:
            return r ? $(1, M) : $(0, M + 1);

          case o:
            var D = this.$locale().weekStart || 0,
                v = (y < D ? y + 7 : y) - D;
            return $(r ? m - v : m + (6 - v), M);

          case a:
          case d:
            return l(g + "Hours", 0);

          case u:
            return l(g + "Minutes", 1);

          case s:
            return l(g + "Seconds", 2);

          case i:
            return l(g + "Milliseconds", 3);

          default:
            return this.clone();
        }
      }, m.endOf = function (t) {
        return this.startOf(t, !1);
      }, m.$set = function (t, e) {
        var n,
            o = O.p(t),
            h = "set" + (this.$u ? "UTC" : ""),
            $ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
            l = o === a ? this.$D + (e - this.$W) : e;

        if (o === f || o === c) {
          var y = this.clone().set(d, 1);
          y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
        } else $ && this.$d[$](l);

        return this.init(), this;
      }, m.set = function (t, e) {
        return this.clone().$set(t, e);
      }, m.get = function (t) {
        return this[O.p(t)]();
      }, m.add = function (r, h) {
        var d,
            $ = this;
        r = Number(r);

        var l = O.p(h),
            y = function y(t) {
          var e = w($);
          return O.w(e.date(e.date() + Math.round(t * r)), $);
        };

        if (l === f) return this.set(f, this.$M + r);
        if (l === c) return this.set(c, this.$y + r);
        if (l === a) return y(1);
        if (l === o) return y(7);
        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1,
            m = this.$d.getTime() + r * M;
        return O.w(m, this);
      }, m.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, m.format = function (t) {
        var e = this,
            n = this.$locale();
        if (!this.isValid()) return n.invalidDate || $;

        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = O.z(this),
            s = this.$H,
            u = this.$m,
            a = this.$M,
            o = n.weekdays,
            f = n.months,
            h = function h(t, n, i, s) {
          return t && (t[n] || t(e, r)) || i[n].substr(0, s);
        },
            c = function c(t) {
          return O.s(s % 12 || 12, t, "0");
        },
            d = n.meridiem || function (t, e, n) {
          var r = t < 12 ? "AM" : "PM";
          return n ? r.toLowerCase() : r;
        },
            l = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: a + 1,
          MM: O.s(a + 1, 2, "0"),
          MMM: h(n.monthsShort, a, f, 3),
          MMMM: h(f, a),
          D: this.$D,
          DD: O.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: h(n.weekdaysMin, this.$W, o, 2),
          ddd: h(n.weekdaysShort, this.$W, o, 3),
          dddd: o[this.$W],
          H: String(s),
          HH: O.s(s, 2, "0"),
          h: c(1),
          hh: c(2),
          a: d(s, u, !0),
          A: d(s, u, !1),
          m: String(u),
          mm: O.s(u, 2, "0"),
          s: String(this.$s),
          ss: O.s(this.$s, 2, "0"),
          SSS: O.s(this.$ms, 3, "0"),
          Z: i
        };

        return r.replace(y, function (t, e) {
          return e || l[t] || i.replace(":", "");
        });
      }, m.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function (r, d, $) {
        var l,
            y = O.p(d),
            M = w(r),
            m = (M.utcOffset() - this.utcOffset()) * e,
            g = this - M,
            D = O.m(this, M);
        return D = (l = {}, l[c] = D / 12, l[f] = D, l[h] = D / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? D : O.a(D);
      }, m.daysInMonth = function () {
        return this.endOf(f).$D;
      }, m.$locale = function () {
        return v[this.$L];
      }, m.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
            r = S(t, e, !0);
        return r && (n.$L = r), n;
      }, m.clone = function () {
        return O.w(this.$d, this);
      }, m.toDate = function () {
        return new Date(this.valueOf());
      }, m.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function () {
        return this.$d.toISOString();
      }, m.toString = function () {
        return this.$d.toUTCString();
      }, M;
    }(),
        b = _.prototype;

    return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
      b[t[1]] = function (e) {
        return this.$g(e, t[0], t[1]);
      };
    }), w.extend = function (t, e) {
      return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
      return w(1e3 * t);
    }, w.en = v[D], w.Ls = v, w.p = {}, w;
  });
})(dayjs_min);

var dayjs = dayjs_min.exports;

var defaultOptions$6 = {
    format: 'YYYY-MM-DD HH:mm:ss',
    method: 'format'
};
function useDate(initialValue, options) {
    var state = vue.ref();
    var value = initialValue || +new Date();
    var _a = _assign(_assign({}, defaultOptions$6), options), format = _a.format, method = _a.method, methodParam = _a.methodParam;
    var refresh = function (refreshValue) {
        console.log(refreshValue);
        value = refreshValue || +new Date();
        switch (method) {
            case 'format':
                state.value = dayjs(value).format(format);
                break;
            case undefined:
                break;
            default:
                var data_1 = dayjs(value);
                if (methodParam) {
                    data_1 = data_1[method](methodParam);
                    if (options && options.format) {
                        data_1 = data_1.format(format);
                    }
                }
                state.value = data_1;
        }
    };
    refresh();
    var data = vue.readonly(state);
    return {
        data: data,
        refresh: refresh
    };
}

var defaultDelay$3 = 1000;
/**
 * 处理防抖函数
 * @param fn
 * @param delay
 * @returns
 */
var useDebounceFn = function (fn, delay) {
    var run = debounce(fn, typeof (delay) === 'number' ? delay : defaultDelay$3);
    return { run: run };
};

// import { debounce } from '../utils'
// 默认值
var defaultDelay$2 = 1000;
/**
 * 处理防抖值
 * @param value
 * @param delay
 * @returns
 */
var useDebounce = function (value, delay) {
    delay = delay || defaultDelay$2;
    var res = vue.ref(value.value);
    // 利用useDebounceFn来简化处理值
    var run = useDebounceFn(function () { return res.value = value.value; }, delay).run;
    vue.watch(value, function () { return run(); }, { deep: true });
    return res;
};

var defaultDelay$1 = 1000;
/**
 * 处理节流函数
 * @param fn
 * @param delay
 * @returns
 */
var useThrottleFn = function (fn, delay) {
    var run = throttle(fn, typeof (delay) === 'number' ? delay : defaultDelay$1);
    return { run: run };
};

// import { debounce } from '../utils'
// 默认值
var defaultDelay = 1000;
/**
 * 处理防抖值
 * @param value
 * @param delay
 * @returns
 */
var useThrottle = function (value, delay) {
    delay = delay || defaultDelay;
    var res = vue.ref(value.value);
    // 利用useDebounceFn来简化处理值
    var run = useThrottleFn(function () { return res.value = value.value; }, delay).run;
    vue.watch(value, function () { return run(); }, { deep: true });
    return res;
};

/**
 * 用于在N个状态值间切换。
 * @param args
 * @returns
 */
function useToggle() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var argsStateArr = args.map(function (variable) { return vue.isRef(variable) ? variable : vue.ref(variable); });
    var initialValue = argsStateArr[0].value;
    var state = vue.ref(initialValue);
    var activeState = argsStateArr[0];
    // 1: 监听当前被激活的state异步
    // 2: 如果当前的异步发生改变则修改state
    vue.watch([activeState], function () {
        state.value = activeState.value;
    }, {
        deep: true
    });
    var currIndex = 0;
    var len = args.length;
    var toggle = function (param) {
        // 判定是否在参数里
        if (param !== undefined && args.includes(param)) {
            state.value = vue.isRef(param) ? param.value : param;
            activeState = vue.isRef(param) ? param : vue.ref(param);
            return;
        }
        // 顺序变化
        currIndex = currIndex + 1 > len - 1 ? 0 : currIndex + 1;
        state.value = argsStateArr[currIndex].value;
        activeState = argsStateArr[currIndex];
    };
    var createHandle = function () {
        return argsStateArr.map(function (active, index) {
            return function () {
                state.value = active.value;
                activeState = active;
                currIndex = index;
            };
        });
    };
    var actions = __spreadArray([toggle], __read(createHandle()), false);
    return [state, actions];
}

// 默认值
var defaultValue = false;
/**
 *
 * @param defaultValue
 * @returns
 */
function useBoolean(value) {
    value = value || defaultValue;
    var _a = __read(useToggle(value, !value), 2), state = _a[0], _b = __read(_a[1], 1), toggle = _b[0];
    var setTrue = function () { return toggle(true); };
    var setFalse = function () { return toggle(false); };
    var actions = { toggle: toggle, setTrue: setTrue, setFalse: setFalse };
    return [state, actions];
}

var useVirtualList = function (state, options) {
    var start = 0;
    var end = 10;
    var list = vue.ref(state.slice(start, end));
    var itemHeight = options.itemHeight, _a = options.overscan, overscan = _a === void 0 ? 5 : _a;
    var containerRef = vue.ref();
    var totalHeight = (function () {
        if (typeof itemHeight === 'number') {
            return state.length * itemHeight;
        }
        return state.reduce(function (sum, _, index) { return sum + itemHeight(index); }, 0);
    })();
    // 计算当前视图展示数量
    var getViewCapacity = function (containerHeight) {
        if (typeof itemHeight === 'number') {
            return Math.ceil(containerHeight / itemHeight);
        }
        var sum = 0;
        var capacity = 0;
        for (var i = start; i < state.length; i++) {
            var height = itemHeight(i);
            sum += height;
            if (sum >= containerHeight) {
                capacity = i;
                break;
            }
        }
        return capacity - start;
    };
    // 获取当前索引
    var getOffset = function (scrollTop) {
        if (typeof itemHeight === 'number') {
            return Math.floor(scrollTop / itemHeight) + 1;
        }
        var sum = 0;
        var offset = 0;
        for (var i = 0; i < state.length; i++) {
            var height = itemHeight(i);
            sum += height;
            if (sum >= scrollTop) {
                offset = i;
                break;
            }
        }
        return offset + 1;
    };
    // 获取当前索引向上高度
    var getDistanceTop = function (index) {
        if (typeof itemHeight === 'number') {
            var height_1 = index * itemHeight;
            return height_1;
        }
        var height = state.slice(0, index).reduce(function (sum, _, i) { return sum + itemHeight(i); }, 0);
        return height;
    };
    var offsetTop = getDistanceTop(start);
    // 计算展示指定位置
    var calculateRange = function () {
        var element = containerRef.value;
        if (element) {
            var offset = getOffset(element.scrollTop);
            var viewCapacity = getViewCapacity(element.clientHeight);
            var from = offset - overscan;
            var to = offset + viewCapacity + overscan;
            start = from < 0 ? 0 : from;
            end = to > state.length ? state.length : to;
            list.value = state.slice(start, end);
            // 实时计算
            offsetTop = getDistanceTop(start);
            wrapperStyle.marginTop = offsetTop + 'px';
            wrapperStyle.height = totalHeight - offsetTop + 'px';
        }
    };
    // 滚动容器的外层监听
    var containerProps = vue.reactive({
        ref: function (ele) {
            containerRef.value = ele;
        },
        onScroll: function (e) {
            e.preventDefault();
            calculateRange();
        },
        style: { overflowY: 'auto' },
    });
    // children 外层包裹器 style
    var wrapperStyle = vue.reactive({
        width: '100%',
        height: totalHeight - offsetTop + 'px',
        marginTop: offsetTop + 'px'
    });
    // 快速滚动到指定 index	
    var scrollTo = function (index) {
        if (containerRef.value) {
            containerRef.value.scrollTop = getDistanceTop(index);
            calculateRange();
        }
    };
    return {
        list: list,
        wrapperStyle: wrapperStyle,
        containerProps: containerProps,
        scrollTo: scrollTo
    };
};

var useDynamicList = function (initialValue) {
    var uuid = (0);
    var uuidKeys = vue.ref([]);
    var setUUID = function (index) {
        index = index === undefined ? uuidKeys.value.length : index;
        uuidKeys.value.splice(index, 0, uuid++);
    };
    (function () {
        initialValue.value.forEach(function () { return setUUID(); });
    })();
    var resetList = function (resetList) {
        uuidKeys.value = [];
        if (vue.isRef(resetList)) {
            resetList.value.forEach(function () { return setUUID(); });
            initialValue = resetList;
            return;
        }
        resetList.forEach(function () { return setUUID(); });
        initialValue.value = resetList;
    };
    var insert = function (index, obj) {
        initialValue.value.splice(index, 0, obj);
        setUUID(index);
    };
    var merge = function (index, obj) {
        var _a;
        obj.forEach(function (active, i) { return setUUID(index + i); });
        (_a = initialValue.value).splice.apply(_a, __spreadArray([index, 0], __read(obj), false));
    };
    var replace = function (index, obj) {
        initialValue.value.splice(index, 1, obj);
    };
    var remove = function (index) {
        uuidKeys.value.splice(index, 1);
        initialValue.value.splice(index, 1);
    };
    var move = function (oldIndex, newIndex) {
        var _a, _b;
        if (oldIndex === newIndex)
            return;
        _a = __read([initialValue.value[newIndex], initialValue.value[oldIndex]], 2), initialValue.value[oldIndex] = _a[0], initialValue.value[newIndex] = _a[1];
        _b = __read([uuidKeys.value[newIndex], uuidKeys.value[oldIndex]], 2), uuidKeys.value[oldIndex] = _b[0], uuidKeys.value[newIndex] = _b[1];
    };
    var getKey = function (index) { return uuidKeys.value[index]; };
    var getIndex = function (key) { return uuidKeys.value.indexOf(key); };
    var push = function (obj) {
        initialValue.value.push(obj);
        setUUID();
    };
    var pop = function () {
        initialValue.value.pop();
        uuidKeys.value.pop();
    };
    var unshift = function (obj) {
        initialValue.value.unshift(obj);
        setUUID(0);
    };
    var shift = function () {
        initialValue.value.shift();
        uuidKeys.value.shift();
    };
    return {
        list: initialValue,
        resetList: resetList,
        insert: insert,
        merge: merge,
        replace: replace,
        remove: remove,
        move: move,
        getKey: getKey,
        getIndex: getIndex,
        push: push,
        pop: pop,
        unshift: unshift,
        shift: shift
    };
};

var storage$1 = localStorage;
var defaultOptions$5 = {
    watch: true
};
var useLocalStorage = function (key, initialValue, options) {
    var watch = _assign(_assign({}, defaultOptions$5), options).watch;
    var data = vue.ref();
    try {
        if (initialValue !== undefined) {
            data.value = vue.isRef(initialValue) ? initialValue.value : initialValue;
        }
        else {
            data.value = JSON.parse(storage$1.getItem(key) || '{}');
        }
    }
    catch (error) {
        console.log(error, 'useLocalStorage初始化失败');
    }
    var type = getValueType(data.value);
    // 判断类型取格式化方法
    var serializer = TypeSerializers[type];
    var setStorage = function () { return storage$1.setItem(key, serializer.write(data.value)); };
    // 状态监听
    if (watch) {
        vue.watch(data, function (newValue) {
            if (newValue === undefined || newValue === null) {
                storage$1.removeItem(key);
                return;
            }
            setStorage();
        }, {
            deep: true
        });
    }
    setStorage();
    return data;
};

var storage = sessionStorage;
var defaultOptions$4 = {
    watch: true
};
var useSessionStorage = function (key, initialValue, options) {
    var watch = _assign(_assign({}, defaultOptions$4), options).watch;
    var data = vue.ref();
    try {
        if (initialValue !== undefined) {
            data.value = vue.isRef(initialValue) ? initialValue.value : initialValue;
        }
        else {
            data.value = JSON.parse(storage.getItem(key) || '{}');
        }
    }
    catch (error) {
        console.log(error, 'useLocalStorage初始化失败');
    }
    var type = getValueType(data.value);
    // 判断类型取格式化方法
    var serializer = TypeSerializers[type];
    var setStorage = function () { return storage.setItem(key, serializer.write(data.value)); };
    // 状态监听
    if (watch) {
        vue.watch(data, function (newValue) {
            if (newValue === undefined || newValue === null) {
                storage.removeItem(key);
                return;
            }
            setStorage();
        }, {
            deep: true
        });
    }
    setStorage();
    return data;
};

var getConnection = function () {
    var nav = navigator;
    if (typeof nav !== 'object')
        return null;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
};
var handlerSetConnection = function () {
    var connection = getConnection();
    return {
        rtt: connection.rtt,
        type: connection.type,
        saveData: connection.saveData,
        downlink: connection.downlink,
        downlinkMax: connection.downlinkMax,
        effectiveType: connection.effectiveType,
    };
};
var useNetwork = function () {
    var state = vue.reactive(_assign({ online: navigator.onLine, since: +new Date() }, handlerSetConnection()));
    var onOnline = function () {
        state.online = true;
        state.since = +new Date();
    };
    var onOffline = function () {
        state.online = false;
        state.since = +new Date();
    };
    var onConnectionChange = function () {
        var connectionData = handlerSetConnection();
        Object.keys(connectionData).forEach(function (key) {
            var propertyKey = key;
            state[propertyKey] = connectionData[propertyKey];
        });
    };
    vue.onMounted(function () {
        var _a;
        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);
        (_a = getConnection()) === null || _a === void 0 ? void 0 : _a.addEventListener('change', onConnectionChange);
    });
    vue.onUnmounted(function () {
        var _a;
        window.removeEventListener('online', onOnline);
        window.removeEventListener('offline', onOffline);
        (_a = getConnection()) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', onConnectionChange);
    });
    return state;
};

var js_cookie = {exports: {}};

/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

(function (module, exports) {

  (function (factory) {
    var registeredInModuleLoader;

    {
      module.exports = factory();
      registeredInModuleLoader = true;
    }

    if (!registeredInModuleLoader) {
      var OldCookies = window.Cookies;
      var api = window.Cookies = factory();

      api.noConflict = function () {
        window.Cookies = OldCookies;
        return api;
      };
    }
  })(function () {
    function extend() {
      var i = 0;
      var result = {};

      for (; i < arguments.length; i++) {
        var attributes = arguments[i];

        for (var key in attributes) {
          result[key] = attributes[key];
        }
      }

      return result;
    }

    function decode(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }

    function init(converter) {
      function api() {}

      function set(key, value, attributes) {
        if (typeof document === 'undefined') {
          return;
        }

        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
        } // We're using "expires" because "max-age" is not supported by IE


        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

        try {
          var result = JSON.stringify(value);

          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var stringifiedAttributes = '';

        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }

          stringifiedAttributes += '; ' + attributeName;

          if (attributes[attributeName] === true) {
            continue;
          } // Considers RFC 6265 section 5.2:
          // ...
          // 3.  If the remaining unparsed-attributes contains a %x3B (";")
          //     character:
          // Consume the characters of the unparsed-attributes up to,
          // not including, the first %x3B (";") character.
          // ...


          stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
        }

        return document.cookie = key + '=' + value + stringifiedAttributes;
      }

      function get(key, json) {
        if (typeof document === 'undefined') {
          return;
        }

        var jar = {}; // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.

        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var i = 0;

        for (; i < cookies.length; i++) {
          var parts = cookies[i].split('=');
          var cookie = parts.slice(1).join('=');

          if (!json && cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }

          try {
            var name = decode(parts[0]);
            cookie = (converter.read || converter)(cookie, name) || decode(cookie);

            if (json) {
              try {
                cookie = JSON.parse(cookie);
              } catch (e) {}
            }

            jar[name] = cookie;

            if (key === name) {
              break;
            }
          } catch (e) {}
        }

        return key ? jar[key] : jar;
      }

      api.set = set;

      api.get = function (key) {
        return get(key, false
        /* read as raw */
        );
      };

      api.getJSON = function (key) {
        return get(key, true
        /* read as json */
        );
      };

      api.remove = function (key, attributes) {
        set(key, '', extend(attributes, {
          expires: -1
        }));
      };

      api.defaults = {};
      api.withConverter = init;
      return api;
    }

    return init(function () {});
  });
})(js_cookie);

var Cookies = js_cookie.exports;

var defaultOptions$3 = {
    watch: false,
    defaultValue: undefined
};
var useCookie = function (key, options) {
    var _a = _assign(_assign({}, defaultOptions$3), options), watch = _a.watch, defaultValue = _a.defaultValue;
    var state = vue.ref(Cookies.get(key) || defaultValue);
    var setCookie = function (value) {
        Cookies.set(key, value, _assign({}, options));
        state.value = value;
    };
    if (watch) {
        vue.watch(state, function (value) {
            if (value === null || value === undefined) {
                Cookies.remove(key);
                return;
            }
            setCookie(value);
        }, {
            deep: true
        });
    }
    return state;
};

var useLockFn = function (fn) {
    var lock = vue.ref(false);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            var ret, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (lock.value)
                            return [2 /*return*/];
                        lock.value = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fn.apply(void 0, __spreadArray([], __read(args), false))];
                    case 2:
                        ret = _a.sent();
                        lock.value = false;
                        return [2 /*return*/, ret];
                    case 3:
                        error_1 = _a.sent();
                        lock.value = false;
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
};

function useSet(initialValue) {
    var initialSet = initialValue ? new Set(initialValue) : new Set();
    var state = vue.ref(initialSet);
    var actions = {
        add: function (value) {
            state.value.add(value);
        },
        remove: function (value) {
            state.value.delete(value);
        },
        has: function (value) { return state.value.has(value); },
        clear: function () { return state.value.clear(); },
        reset: function () {
            state.value = new Set();
        }
    };
    return [state, vue.markRaw(actions)];
}

function useMap(initialValue) {
    var initialMap = initialValue ? new Map(initialValue) : new Map();
    var state = vue.ref(initialMap);
    var actions = {
        set: function (key, value) {
            state.value.set(key, value);
        },
        get: function (key) {
            return state.value.get(key);
        },
        remove: function (key) {
            state.value.delete(key);
        },
        has: function (key) { return state.value.has(key); },
        clear: function () { return state.value.clear(); },
        setAll: function (newMap) {
            state.value = new Map(newMap);
        },
        reset: function () { return state.value = initialMap; }
    };
    return [state, vue.markRaw(actions)];
}

var useMediaQuery = function (query) {
    var mediaQuery = window.matchMedia(query);
    var stata = vue.ref(mediaQuery.matches);
    var handleChange = function (event) { return stata.value = event.matches; };
    mediaQuery.addEventListener('change', handleChange);
    vue.onUnmounted(function () {
        mediaQuery.removeEventListener('change', handleChange);
    });
    return stata;
};

var useExternal = function (src, onLoaded, options) {
    if (options === void 0) { options = {}; }
    var resources = vue.ref(null);
    var _a = options.manual, manual = _a === void 0 ? false : _a, async = options.async, crossOrigin = options.crossOrigin, referrerPolicy = options.referrerPolicy, noModule = options.noModule, defer = options.defer, _b = options.media, media = _b === void 0 ? 'all' : _b, _c = options.target, target = _c === void 0 ? document.body : _c;
    var el = document.createElement('script');
    var parentEl = document.head;
    var loadScript = function () { return new Promise(function (resolve) {
        var isExist = document.querySelector("script[src=\"".concat(src, "\"]"));
        if (isExist)
            return;
        el = document.createElement('script');
        el.src = src;
        el.type = 'text/javascript';
        if (async)
            el.async = async;
        if (defer)
            el.defer = defer;
        if (noModule)
            el.noModule = noModule;
        if (crossOrigin)
            el.crossOrigin = crossOrigin;
        if (referrerPolicy)
            el.referrerPolicy = referrerPolicy;
        el = parentEl.appendChild(el);
        resolve(el);
    }); };
    var loadCss = function () { return new Promise(function (resolve) {
        var isExist = document.querySelector("link[href=\"".concat(src, "\"]"));
        if (isExist)
            return;
        el = document.createElement('link');
        el.href = src;
        el.rel = 'stylesheet';
        el.type = 'text/css';
        el.media = media;
        el = parentEl.appendChild(el);
        resolve(el);
    }); };
    var loadImage = function () { return new Promise(function (resolve) {
        var isExist = document.querySelector("img[src=\"".concat(src, "\"]"));
        if (isExist)
            return;
        el = document.createElement('img');
        el.src = src;
        parentEl = vue.isRef(target) ? target.value : target;
        parentEl.appendChild(el);
        resolve(el);
    }); };
    var load = function () { return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!/\.js$/.test(src)) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadScript()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!/\.css$/.test(src)) return [3 /*break*/, 4];
                    return [4 /*yield*/, loadCss()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!/\.(gif|jpg|jpeg|png|svg|GIF|JPG|PNG|)$/.test(src)) return [3 /*break*/, 6];
                    return [4 /*yield*/, loadImage()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    resources.value = el;
                    el.addEventListener('error', function (event) { return reject(event); });
                    el.addEventListener('abort', function (event) { return reject(event); });
                    el.addEventListener('load', function () {
                        onLoaded && onLoaded(el);
                    });
                    resolve(el);
                    return [2 /*return*/];
            }
        });
    }); }); };
    var unload = function () {
        if (resources.value) {
            parentEl.removeChild(resources.value);
        }
    };
    if (!manual)
        load();
    return { resources: resources, load: load, unload: unload };
};

var defaultOptions$2 = {
    onFull: function () { },
    onExitFull: function () { },
};
var useFullscreen = function (target, options) {
    var fullScreenElement = !!document.fullscreenElement;
    var isFullscreen = vue.ref(fullScreenElement);
    var _a = _assign(_assign({}, defaultOptions$2), options), onFull = _a.onFull, onExitFull = _a.onExitFull;
    var el = document.body;
    var getEl = function () {
        if (typeof target === 'function') {
            return target();
        }
        return vue.isRef(target) ? target.value : target;
    };
    var handler = function () {
        if (isFullscreen.value) {
            onFull();
        }
        else {
            onExitFull();
        }
    };
    vue.onMounted(function () {
        el = getEl() || el;
        el.addEventListener('fullscreenchange', handler);
    });
    vue.onUnmounted(function () {
        el.removeEventListener('fullscreenchange', handler);
    });
    var actions = {
        setFull: function () {
            if (isFullscreen.value)
                return;
            el.requestFullscreen();
            isFullscreen.value = true;
        },
        exitFull: function () {
            if (!isFullscreen.value)
                return;
            document.exitFullscreen();
            isFullscreen.value = false;
        },
        toggle: function () {
            isFullscreen.value ? actions.exitFull() : actions.setFull();
        }
    };
    return [isFullscreen, actions];
};

var useDocumentVisibility = function () {
    var documentVisibility = vue.ref(document.hidden);
    var handler = function () {
        documentVisibility.value = document.hidden;
    };
    document.addEventListener('visibilitychange', handler);
    return documentVisibility;
};

var defaultReact = {
    left: NaN,
    right: NaN,
    top: NaN,
    bottom: NaN,
    height: NaN,
    width: NaN
};
var useTextSelection = function (target) {
    if (target === void 0) { target = document; }
    var state = vue.reactive({
        text: '',
        rect: defaultReact
    });
    var el = document;
    var getEl = function () {
        if (typeof target === 'function') {
            return target();
        }
        return vue.isRef(target) ? target.value : target;
    };
    var getRect = function (selection) {
        if (!selection)
            return defaultReact;
        var range = selection.getRangeAt(0);
        var _a = range.getBoundingClientRect(), height = _a.height, width = _a.width, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
        return {
            height: height,
            width: width,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
        };
    };
    var handleMouseup = function () {
        var currSelection = window.getSelection();
        var text = currSelection ? currSelection.toString() : '';
        var rect = getRect(currSelection);
        state.text = text;
        state.rect = rect;
    };
    var handleMousedown = function () {
        if (state.text) {
            state.text = '';
            state.rect = defaultReact;
        }
        var currSelection = window.getSelection();
        if (!currSelection)
            return;
        currSelection.removeAllRanges();
    };
    vue.onMounted(function () {
        el = getEl();
        el.addEventListener('mouseup', handleMouseup);
        document.addEventListener('mousedown', handleMousedown);
    });
    vue.onUnmounted(function () {
        el.removeEventListener('mouseup', handleMouseup);
        document.removeEventListener('mousedown', handleMousedown);
    });
    return vue.toRefs(state);
};

var defaultOptions$1 = {
    immediate: false,
};
var useInterval = function (fn, delay, options) {
    var immediate = _assign(_assign({}, defaultOptions$1), options).immediate;
    var state = vue.isRef(delay) ? delay : vue.ref(delay);
    if (immediate)
        fn();
    var timer = null;
    var clear = function () { return timer ; };
    var handler = function () {
        if (state.value === undefined || state.value === null)
            return;
        fn();
        run();
    };
    var run = function () {
        if (state.value === undefined || state.value === null) {
            return;
        }
        setTimeout(handler, state.value);
    };
    run();
    vue.onUnmounted(function () { return clear(); });
};

var useTimeout = function (fn, delay) {
    var state = vue.isRef(delay) ? delay : vue.ref(delay);
    var timer = null;
    var clear = function () { return timer ; };
    var handler = function () {
        if (state.value === undefined || state.value === null)
            return;
        fn();
    };
    var run = function () {
        if (state.value === undefined || state.value === null) {
            return;
        }
        setTimeout(handler, state.value);
    };
    run();
    vue.onUnmounted(function () { return clear(); });
};

var easy_qrcode_min = {exports: {}};

(function (module, exports) {
  !function () {

    function a(a, b) {
      var c,
          d = Object.keys(b);

      for (c = 0; c < d.length; c++) {
        a = a.replace(new RegExp("\\{" + d[c] + "\\}", "gi"), b[d[c]]);
      }

      return a;
    }

    function b(a) {
      var b, c, d;
      if (!a) throw new Error("cannot create a random attribute name for an undefined object");
      b = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", c = "";

      do {
        for (c = "", d = 0; d < 12; d++) {
          c += b[Math.floor(Math.random() * b.length)];
        }
      } while (a[c]);

      return c;
    }

    function c(a) {
      var b = {
        left: "start",
        right: "end",
        center: "middle",
        start: "start",
        end: "end"
      };
      return b[a] || b.start;
    }

    function d(a) {
      var b = {
        alphabetic: "alphabetic",
        hanging: "hanging",
        top: "text-before-edge",
        bottom: "text-after-edge",
        middle: "central"
      };
      return b[a] || b.alphabetic;
    }

    var e, _f, g, h, i;

    i = function (a, b) {
      var c,
          d,
          e,
          f = {};

      for (a = a.split(","), b = b || 10, c = 0; c < a.length; c += 2) {
        d = "&" + a[c + 1] + ";", e = parseInt(a[c], b), f[d] = "&#" + e + ";";
      }

      return f["\\xa0"] = "&#160;", f;
    }("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32), e = {
      strokeStyle: {
        svgAttr: "stroke",
        canvas: "#000000",
        svg: "none",
        apply: "stroke"
      },
      fillStyle: {
        svgAttr: "fill",
        canvas: "#000000",
        svg: null,
        apply: "fill"
      },
      lineCap: {
        svgAttr: "stroke-linecap",
        canvas: "butt",
        svg: "butt",
        apply: "stroke"
      },
      lineJoin: {
        svgAttr: "stroke-linejoin",
        canvas: "miter",
        svg: "miter",
        apply: "stroke"
      },
      miterLimit: {
        svgAttr: "stroke-miterlimit",
        canvas: 10,
        svg: 4,
        apply: "stroke"
      },
      lineWidth: {
        svgAttr: "stroke-width",
        canvas: 1,
        svg: 1,
        apply: "stroke"
      },
      globalAlpha: {
        svgAttr: "opacity",
        canvas: 1,
        svg: 1,
        apply: "fill stroke"
      },
      font: {
        canvas: "10px sans-serif"
      },
      shadowColor: {
        canvas: "#000000"
      },
      shadowOffsetX: {
        canvas: 0
      },
      shadowOffsetY: {
        canvas: 0
      },
      shadowBlur: {
        canvas: 0
      },
      textAlign: {
        canvas: "start"
      },
      textBaseline: {
        canvas: "alphabetic"
      },
      lineDash: {
        svgAttr: "stroke-dasharray",
        canvas: [],
        svg: null,
        apply: "stroke"
      }
    }, g = function g(a, b) {
      this.__root = a, this.__ctx = b;
    }, g.prototype.addColorStop = function (b, c) {
      var d,
          e,
          f = this.__ctx.__createElement("stop");

      f.setAttribute("offset", b), -1 !== c.indexOf("rgba") ? (d = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi, e = d.exec(c), f.setAttribute("stop-color", a("rgb({r},{g},{b})", {
        r: e[1],
        g: e[2],
        b: e[3]
      })), f.setAttribute("stop-opacity", e[4])) : f.setAttribute("stop-color", c), this.__root.appendChild(f);
    }, h = function h(a, b) {
      this.__root = a, this.__ctx = b;
    }, _f = function f(a) {
      var b,
          c = {
        width: 500,
        height: 500,
        enableMirroring: !1
      };
      if (arguments.length > 1 ? (b = c, b.width = arguments[0], b.height = arguments[1]) : b = a || c, !(this instanceof _f)) return new _f(b);
      this.width = b.width || c.width, this.height = b.height || c.height, this.enableMirroring = void 0 !== b.enableMirroring ? b.enableMirroring : c.enableMirroring, this.canvas = this, this.__document = b.document || document, b.ctx ? this.__ctx = b.ctx : (this.__canvas = this.__document.createElement("canvas"), this.__ctx = this.__canvas.getContext("2d")), this.__setDefaultStyles(), this.__stack = [this.__getStyleState()], this.__groupStack = [], this.__root = this.__document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.__root.setAttribute("version", 1.1), this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), this.__root.setAttribute("width", this.width), this.__root.setAttribute("height", this.height), this.__ids = {}, this.__defs = this.__document.createElementNS("http://www.w3.org/2000/svg", "defs"), this.__root.appendChild(this.__defs), this.__currentElement = this.__document.createElementNS("http://www.w3.org/2000/svg", "g"), this.__root.appendChild(this.__currentElement);
    }, _f.prototype.__createElement = function (a, b, c) {
      void 0 === b && (b = {});

      var d,
          e,
          f = this.__document.createElementNS("http://www.w3.org/2000/svg", a),
          g = Object.keys(b);

      for (c && (f.setAttribute("fill", "none"), f.setAttribute("stroke", "none")), d = 0; d < g.length; d++) {
        e = g[d], f.setAttribute(e, b[e]);
      }

      return f;
    }, _f.prototype.__setDefaultStyles = function () {
      var a,
          b,
          c = Object.keys(e);

      for (a = 0; a < c.length; a++) {
        b = c[a], this[b] = e[b].canvas;
      }
    }, _f.prototype.__applyStyleState = function (a) {
      var b,
          c,
          d = Object.keys(a);

      for (b = 0; b < d.length; b++) {
        c = d[b], this[c] = a[c];
      }
    }, _f.prototype.__getStyleState = function () {
      var a,
          b,
          c = {},
          d = Object.keys(e);

      for (a = 0; a < d.length; a++) {
        b = d[a], c[b] = this[b];
      }

      return c;
    }, _f.prototype.__applyStyleToCurrentElement = function (b) {
      var c = this.__currentElement,
          d = this.__currentElementsToStyle;
      d && (c.setAttribute(b, ""), c = d.element, d.children.forEach(function (a) {
        a.setAttribute(b, "");
      }));
      var f,
          i,
          j,
          k,
          l,
          m,
          n = Object.keys(e);

      for (f = 0; f < n.length; f++) {
        if (i = e[n[f]], j = this[n[f]], i.apply) if (j instanceof h) {
          if (j.__ctx) for (; j.__ctx.__defs.childNodes.length;) {
            k = j.__ctx.__defs.childNodes[0].getAttribute("id"), this.__ids[k] = k, this.__defs.appendChild(j.__ctx.__defs.childNodes[0]);
          }
          c.setAttribute(i.apply, a("url(#{id})", {
            id: j.__root.getAttribute("id")
          }));
        } else if (j instanceof g) c.setAttribute(i.apply, a("url(#{id})", {
          id: j.__root.getAttribute("id")
        }));else if (-1 !== i.apply.indexOf(b) && i.svg !== j) if ("stroke" !== i.svgAttr && "fill" !== i.svgAttr || -1 === j.indexOf("rgba")) {
          var o = i.svgAttr;
          if ("globalAlpha" === n[f] && (o = b + "-" + i.svgAttr, c.getAttribute(o))) continue;
          c.setAttribute(o, j);
        } else {
          l = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi, m = l.exec(j), c.setAttribute(i.svgAttr, a("rgb({r},{g},{b})", {
            r: m[1],
            g: m[2],
            b: m[3]
          }));
          var p = m[4],
              q = this.globalAlpha;
          null != q && (p *= q), c.setAttribute(i.svgAttr + "-opacity", p);
        }
      }
    }, _f.prototype.__closestGroupOrSvg = function (a) {
      return a = a || this.__currentElement, "g" === a.nodeName || "svg" === a.nodeName ? a : this.__closestGroupOrSvg(a.parentNode);
    }, _f.prototype.getSerializedSvg = function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = new XMLSerializer().serializeToString(this.__root);
      if (g = /xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi, g.test(h) && (h = h.replace('xmlns="http://www.w3.org/2000/svg', 'xmlns:xlink="http://www.w3.org/1999/xlink')), a) for (b = Object.keys(i), c = 0; c < b.length; c++) {
        d = b[c], e = i[d], f = new RegExp(d, "gi"), f.test(h) && (h = h.replace(f, e));
      }
      return h;
    }, _f.prototype.getSvg = function () {
      return this.__root;
    }, _f.prototype.save = function () {
      var a = this.__createElement("g"),
          b = this.__closestGroupOrSvg();

      this.__groupStack.push(b), b.appendChild(a), this.__currentElement = a, this.__stack.push(this.__getStyleState());
    }, _f.prototype.restore = function () {
      this.__currentElement = this.__groupStack.pop(), this.__currentElementsToStyle = null, this.__currentElement || (this.__currentElement = this.__root.childNodes[1]);

      var a = this.__stack.pop();

      this.__applyStyleState(a);
    }, _f.prototype.__addTransform = function (a) {
      var b = this.__closestGroupOrSvg();

      if (b.childNodes.length > 0) {
        "path" === this.__currentElement.nodeName && (this.__currentElementsToStyle || (this.__currentElementsToStyle = {
          element: b,
          children: []
        }), this.__currentElementsToStyle.children.push(this.__currentElement), this.__applyCurrentDefaultPath());

        var c = this.__createElement("g");

        b.appendChild(c), this.__currentElement = c;
      }

      var d = this.__currentElement.getAttribute("transform");

      d ? d += " " : d = "", d += a, this.__currentElement.setAttribute("transform", d);
    }, _f.prototype.scale = function (b, c) {
      void 0 === c && (c = b), this.__addTransform(a("scale({x},{y})", {
        x: b,
        y: c
      }));
    }, _f.prototype.rotate = function (b) {
      var c = 180 * b / Math.PI;

      this.__addTransform(a("rotate({angle},{cx},{cy})", {
        angle: c,
        cx: 0,
        cy: 0
      }));
    }, _f.prototype.translate = function (b, c) {
      this.__addTransform(a("translate({x},{y})", {
        x: b,
        y: c
      }));
    }, _f.prototype.transform = function (b, c, d, e, f, g) {
      this.__addTransform(a("matrix({a},{b},{c},{d},{e},{f})", {
        a: b,
        b: c,
        c: d,
        d: e,
        e: f,
        f: g
      }));
    }, _f.prototype.beginPath = function () {
      var a, b;
      this.__currentDefaultPath = "", this.__currentPosition = {}, a = this.__createElement("path", {}, !0), b = this.__closestGroupOrSvg(), b.appendChild(a), this.__currentElement = a;
    }, _f.prototype.__applyCurrentDefaultPath = function () {
      var a = this.__currentElement;
      "path" === a.nodeName ? a.setAttribute("d", this.__currentDefaultPath) : console.error("Attempted to apply path command to node", a.nodeName);
    }, _f.prototype.__addPathCommand = function (a) {
      this.__currentDefaultPath += " ", this.__currentDefaultPath += a;
    }, _f.prototype.moveTo = function (b, c) {
      "path" !== this.__currentElement.nodeName && this.beginPath(), this.__currentPosition = {
        x: b,
        y: c
      }, this.__addPathCommand(a("M {x} {y}", {
        x: b,
        y: c
      }));
    }, _f.prototype.closePath = function () {
      this.__currentDefaultPath && this.__addPathCommand("Z");
    }, _f.prototype.lineTo = function (b, c) {
      this.__currentPosition = {
        x: b,
        y: c
      }, this.__currentDefaultPath.indexOf("M") > -1 ? this.__addPathCommand(a("L {x} {y}", {
        x: b,
        y: c
      })) : this.__addPathCommand(a("M {x} {y}", {
        x: b,
        y: c
      }));
    }, _f.prototype.bezierCurveTo = function (b, c, d, e, f, g) {
      this.__currentPosition = {
        x: f,
        y: g
      }, this.__addPathCommand(a("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}", {
        cp1x: b,
        cp1y: c,
        cp2x: d,
        cp2y: e,
        x: f,
        y: g
      }));
    }, _f.prototype.quadraticCurveTo = function (b, c, d, e) {
      this.__currentPosition = {
        x: d,
        y: e
      }, this.__addPathCommand(a("Q {cpx} {cpy} {x} {y}", {
        cpx: b,
        cpy: c,
        x: d,
        y: e
      }));
    };

    var j = function j(a) {
      var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
      return [a[0] / b, a[1] / b];
    };

    _f.prototype.arcTo = function (a, b, c, d, e) {
      var f = this.__currentPosition && this.__currentPosition.x,
          g = this.__currentPosition && this.__currentPosition.y;

      if (void 0 !== f && void 0 !== g) {
        if (e < 0) throw new Error("IndexSizeError: The radius provided (" + e + ") is negative.");
        if (f === a && g === b || a === c && b === d || 0 === e) return void this.lineTo(a, b);
        var h = j([f - a, g - b]),
            i = j([c - a, d - b]);
        if (h[0] * i[1] == h[1] * i[0]) return void this.lineTo(a, b);

        var k = h[0] * i[0] + h[1] * i[1],
            l = Math.acos(Math.abs(k)),
            m = j([h[0] + i[0], h[1] + i[1]]),
            n = e / Math.sin(l / 2),
            o = a + n * m[0],
            p = b + n * m[1],
            q = [-h[1], h[0]],
            r = [i[1], -i[0]],
            s = function s(a) {
          var b = a[0];
          return a[1] >= 0 ? Math.acos(b) : -Math.acos(b);
        },
            t = s(q),
            u = s(r);

        this.lineTo(o + q[0] * e, p + q[1] * e), this.arc(o, p, e, t, u);
      }
    }, _f.prototype.stroke = function () {
      "path" === this.__currentElement.nodeName && this.__currentElement.setAttribute("paint-order", "fill stroke markers"), this.__applyCurrentDefaultPath(), this.__applyStyleToCurrentElement("stroke");
    }, _f.prototype.fill = function () {
      "path" === this.__currentElement.nodeName && this.__currentElement.setAttribute("paint-order", "stroke fill markers"), this.__applyCurrentDefaultPath(), this.__applyStyleToCurrentElement("fill");
    }, _f.prototype.rect = function (a, b, c, d) {
      "path" !== this.__currentElement.nodeName && this.beginPath(), this.moveTo(a, b), this.lineTo(a + c, b), this.lineTo(a + c, b + d), this.lineTo(a, b + d), this.lineTo(a, b), this.closePath();
    }, _f.prototype.fillRect = function (a, b, c, d) {
      var e, f;
      e = this.__createElement("rect", {
        x: a,
        y: b,
        width: c,
        height: d,
        "shape-rendering": "crispEdges"
      }, !0), f = this.__closestGroupOrSvg(), f.appendChild(e), this.__currentElement = e, this.__applyStyleToCurrentElement("fill");
    }, _f.prototype.strokeRect = function (a, b, c, d) {
      var e, f;
      e = this.__createElement("rect", {
        x: a,
        y: b,
        width: c,
        height: d
      }, !0), f = this.__closestGroupOrSvg(), f.appendChild(e), this.__currentElement = e, this.__applyStyleToCurrentElement("stroke");
    }, _f.prototype.__clearCanvas = function () {
      for (var a = this.__closestGroupOrSvg(), b = a.getAttribute("transform"), c = this.__root.childNodes[1], d = c.childNodes, e = d.length - 1; e >= 0; e--) {
        d[e] && c.removeChild(d[e]);
      }

      this.__currentElement = c, this.__groupStack = [], b && this.__addTransform(b);
    }, _f.prototype.clearRect = function (a, b, c, d) {
      if (0 === a && 0 === b && c === this.width && d === this.height) return void this.__clearCanvas();

      var e,
          f = this.__closestGroupOrSvg();

      e = this.__createElement("rect", {
        x: a,
        y: b,
        width: c,
        height: d,
        fill: "#FFFFFF"
      }, !0), f.appendChild(e);
    }, _f.prototype.createLinearGradient = function (a, c, d, e) {
      var f = this.__createElement("linearGradient", {
        id: b(this.__ids),
        x1: a + "px",
        x2: d + "px",
        y1: c + "px",
        y2: e + "px",
        gradientUnits: "userSpaceOnUse"
      }, !1);

      return this.__defs.appendChild(f), new g(f, this);
    }, _f.prototype.createRadialGradient = function (a, c, d, e, f, h) {
      var i = this.__createElement("radialGradient", {
        id: b(this.__ids),
        cx: e + "px",
        cy: f + "px",
        r: h + "px",
        fx: a + "px",
        fy: c + "px",
        gradientUnits: "userSpaceOnUse"
      }, !1);

      return this.__defs.appendChild(i), new g(i, this);
    }, _f.prototype.__parseFont = function () {
      var a = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z0-9]+?)\s*$/i,
          b = a.exec(this.font),
          c = {
        style: b[1] || "normal",
        size: b[4] || "10px",
        family: b[6] || "sans-serif",
        weight: b[3] || "normal",
        decoration: b[2] || "normal",
        href: null
      };
      return "underline" === this.__fontUnderline && (c.decoration = "underline"), this.__fontHref && (c.href = this.__fontHref), c;
    }, _f.prototype.__wrapTextLink = function (a, b) {
      if (a.href) {
        var c = this.__createElement("a");

        return c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.href), c.appendChild(b), c;
      }

      return b;
    }, _f.prototype.__applyText = function (a, b, e, f) {
      var g = this.__parseFont(),
          h = this.__closestGroupOrSvg(),
          i = this.__createElement("text", {
        "font-family": g.family,
        "font-size": g.size,
        "font-style": g.style,
        "font-weight": g.weight,
        "text-decoration": g.decoration,
        x: b,
        y: e,
        "text-anchor": c(this.textAlign),
        "dominant-baseline": d(this.textBaseline)
      }, !0);

      i.appendChild(this.__document.createTextNode(a)), this.__currentElement = i, this.__applyStyleToCurrentElement(f), h.appendChild(this.__wrapTextLink(g, i));
    }, _f.prototype.fillText = function (a, b, c) {
      this.__applyText(a, b, c, "fill");
    }, _f.prototype.strokeText = function (a, b, c) {
      this.__applyText(a, b, c, "stroke");
    }, _f.prototype.measureText = function (a) {
      return this.__ctx.font = this.font, this.__ctx.measureText(a);
    }, _f.prototype.arc = function (b, c, d, e, f, g) {
      if (e !== f) {
        e %= 2 * Math.PI, f %= 2 * Math.PI, e === f && (f = (f + 2 * Math.PI - .001 * (g ? -1 : 1)) % (2 * Math.PI));
        var h = b + d * Math.cos(f),
            i = c + d * Math.sin(f),
            j = b + d * Math.cos(e),
            k = c + d * Math.sin(e),
            l = g ? 0 : 1,
            m = 0,
            n = f - e;
        n < 0 && (n += 2 * Math.PI), m = g ? n > Math.PI ? 0 : 1 : n > Math.PI ? 1 : 0, this.lineTo(j, k), this.__addPathCommand(a("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}", {
          rx: d,
          ry: d,
          xAxisRotation: 0,
          largeArcFlag: m,
          sweepFlag: l,
          endX: h,
          endY: i
        })), this.__currentPosition = {
          x: h,
          y: i
        };
      }
    }, _f.prototype.clip = function () {
      var c = this.__closestGroupOrSvg(),
          d = this.__createElement("clipPath"),
          e = b(this.__ids),
          f = this.__createElement("g");

      this.__applyCurrentDefaultPath(), c.removeChild(this.__currentElement), d.setAttribute("id", e), d.appendChild(this.__currentElement), this.__defs.appendChild(d), c.setAttribute("clip-path", a("url(#{id})", {
        id: e
      })), c.appendChild(f), this.__currentElement = f;
    }, _f.prototype.drawImage = function () {
      var a,
          b,
          c,
          d,
          e,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p = Array.prototype.slice.call(arguments),
          q = p[0],
          r = 0,
          s = 0;
      if (3 === p.length) a = p[1], b = p[2], e = q.width, g = q.height, c = e, d = g;else if (5 === p.length) a = p[1], b = p[2], c = p[3], d = p[4], e = q.width, g = q.height;else {
        if (9 !== p.length) throw new Error("Invalid number of arguments passed to drawImage: " + arguments.length);
        r = p[1], s = p[2], e = p[3], g = p[4], a = p[5], b = p[6], c = p[7], d = p[8];
      }
      h = this.__closestGroupOrSvg(), this.__currentElement;
      var t = "translate(" + a + ", " + b + ")";

      if (q instanceof _f) {
        if (i = q.getSvg().cloneNode(!0), i.childNodes && i.childNodes.length > 1) {
          for (j = i.childNodes[0]; j.childNodes.length;) {
            o = j.childNodes[0].getAttribute("id"), this.__ids[o] = o, this.__defs.appendChild(j.childNodes[0]);
          }

          if (k = i.childNodes[1]) {
            var u,
                v = k.getAttribute("transform");
            u = v ? v + " " + t : t, k.setAttribute("transform", u), h.appendChild(k);
          }
        }
      } else "CANVAS" !== q.nodeName && "IMG" !== q.nodeName || (l = this.__createElement("image"), l.setAttribute("width", c), l.setAttribute("height", d), l.setAttribute("preserveAspectRatio", "none"), l.setAttribute("opacity", this.globalAlpha), (r || s || e !== q.width || g !== q.height) && (m = this.__document.createElement("canvas"), m.width = c, m.height = d, n = m.getContext("2d"), n.drawImage(q, r, s, e, g, 0, 0, c, d), q = m), l.setAttribute("transform", t), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "CANVAS" === q.nodeName ? q.toDataURL() : q.originalSrc), h.appendChild(l));
    }, _f.prototype.createPattern = function (a, c) {
      var d,
          e = this.__document.createElementNS("http://www.w3.org/2000/svg", "pattern"),
          g = b(this.__ids);

      return e.setAttribute("id", g), e.setAttribute("width", a.width), e.setAttribute("height", a.height), "CANVAS" === a.nodeName || "IMG" === a.nodeName ? (d = this.__document.createElementNS("http://www.w3.org/2000/svg", "image"), d.setAttribute("width", a.width), d.setAttribute("height", a.height), d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "CANVAS" === a.nodeName ? a.toDataURL() : a.getAttribute("src")), e.appendChild(d), this.__defs.appendChild(e)) : a instanceof _f && (e.appendChild(a.__root.childNodes[1]), this.__defs.appendChild(e)), new h(e, this);
    }, _f.prototype.setLineDash = function (a) {
      a && a.length > 0 ? this.lineDash = a.join(",") : this.lineDash = null;
    }, _f.prototype.drawFocusRing = function () {}, _f.prototype.createImageData = function () {}, _f.prototype.getImageData = function () {}, _f.prototype.putImageData = function () {}, _f.prototype.globalCompositeOperation = function () {}, _f.prototype.setTransform = function () {}, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (window.C2S = _f), (module.exports = _f);
  }(), function () {

    function a(a, b, c) {
      this.mode = q.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];

      for (var d = 0, e = this.data.length; d < e; d++) {
        var f = [],
            g = this.data.charCodeAt(d);
        b ? f[0] = g : g > 65536 ? (f[0] = 240 | (1835008 & g) >>> 18, f[1] = 128 | (258048 & g) >>> 12, f[2] = 128 | (4032 & g) >>> 6, f[3] = 128 | 63 & g) : g > 2048 ? (f[0] = 224 | (61440 & g) >>> 12, f[1] = 128 | (4032 & g) >>> 6, f[2] = 128 | 63 & g) : g > 128 ? (f[0] = 192 | (1984 & g) >>> 6, f[1] = 128 | 63 & g) : f[0] = g, this.parsedData.push(f);
      }

      this.parsedData = Array.prototype.concat.apply([], this.parsedData), c || this.parsedData.length == this.data.length || (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
    }

    function b(a, b) {
      this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
    }

    function c(a, b) {
      if (a.length == i) throw new Error(a.length + "/" + b);

      for (var c = 0; c < a.length && 0 == a[c];) {
        c++;
      }

      this.num = new Array(a.length - c + b);

      for (var d = 0; d < a.length - c; d++) {
        this.num[d] = a[d + c];
      }
    }

    function d(a, b) {
      this.totalCount = a, this.dataCount = b;
    }

    function e() {
      this.buffer = [], this.length = 0;
    }

    function f() {
      var a = !1,
          b = navigator.userAgent;

      if (/android/i.test(b)) {
        a = !0;
        var c = b.toString().match(/android ([0-9]\.[0-9])/i);
        c && c[1] && (a = parseFloat(c[1]));
      }

      return a;
    }

    function g(a, b) {
      for (var c = b.correctLevel, d = 1, e = h(a), f = 0, g = w.length; f < g; f++) {
        var i = 0;

        switch (c) {
          case r.L:
            i = w[f][0];
            break;

          case r.M:
            i = w[f][1];
            break;

          case r.Q:
            i = w[f][2];
            break;

          case r.H:
            i = w[f][3];
        }

        if (e <= i) break;
        d++;
      }

      if (d > w.length) throw new Error("Too long data. the CorrectLevel." + ["M", "L", "H", "Q"][c] + " limit length is " + i);
      return 0 != b.version && (d <= b.version ? (d = b.version, b.runVersion = d) : (console.warn("QR Code version " + b.version + " too small, run version use " + d), b.runVersion = d)), d;
    }

    function h(a) {
      var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
      return b.length + (b.length != a.length ? 3 : 0);
    }

    var i,
        j,
        k = "object" == _typeof(commonjsGlobal) && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal,
        l = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
        m = k || l || Function("return this")(),
        n = exports && !exports.nodeType && exports,
        o = n && "object" == 'object' && module && !module.nodeType && module,
        p = m.QRCode;
    a.prototype = {
      getLength: function getLength(a) {
        return this.parsedData.length;
      },
      write: function write(a) {
        for (var b = 0, c = this.parsedData.length; b < c; b++) {
          a.put(this.parsedData[b], 8);
        }
      }
    }, b.prototype = {
      addData: function addData(b, c, d) {
        var e = new a(b, c, d);
        this.dataList.push(e), this.dataCache = null;
      },
      isDark: function isDark(a, b) {
        if (a < 0 || this.moduleCount <= a || b < 0 || this.moduleCount <= b) throw new Error(a + "," + b);
        return this.modules[a][b][0];
      },
      getEye: function getEye(a, b) {
        if (a < 0 || this.moduleCount <= a || b < 0 || this.moduleCount <= b) throw new Error(a + "," + b);
        var c = this.modules[a][b];

        if (c[1]) {
          var d = "P" + c[1] + "_" + c[2];
          return "A" == c[2] && (d = "A" + c[1]), {
            isDark: c[0],
            type: d
          };
        }

        return null;
      },
      getModuleCount: function getModuleCount() {
        return this.moduleCount;
      },
      make: function make() {
        this.makeImpl(!1, this.getBestMaskPattern());
      },
      makeImpl: function makeImpl(a, c) {
        this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);

        for (var d = 0; d < this.moduleCount; d++) {
          this.modules[d] = new Array(this.moduleCount);

          for (var e = 0; e < this.moduleCount; e++) {
            this.modules[d][e] = [];
          }
        }

        this.setupPositionProbePattern(0, 0, "TL"), this.setupPositionProbePattern(this.moduleCount - 7, 0, "BL"), this.setupPositionProbePattern(0, this.moduleCount - 7, "TR"), this.setupPositionAdjustPattern("A"), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c);
      },
      setupPositionProbePattern: function setupPositionProbePattern(a, b, c) {
        for (var d = -1; d <= 7; d++) {
          if (!(a + d <= -1 || this.moduleCount <= a + d)) for (var e = -1; e <= 7; e++) {
            b + e <= -1 || this.moduleCount <= b + e || (0 <= d && d <= 6 && (0 == e || 6 == e) || 0 <= e && e <= 6 && (0 == d || 6 == d) || 2 <= d && d <= 4 && 2 <= e && e <= 4 ? (this.modules[a + d][b + e][0] = !0, this.modules[a + d][b + e][2] = c, this.modules[a + d][b + e][1] = -0 == d || -0 == e || 6 == d || 6 == e ? "O" : "I") : this.modules[a + d][b + e][0] = !1);
          }
        }
      },
      getBestMaskPattern: function getBestMaskPattern() {
        for (var a = 0, b = 0, c = 0; c < 8; c++) {
          this.makeImpl(!0, c);
          var d = t.getLostPoint(this);
          (0 == c || a > d) && (a = d, b = c);
        }

        return b;
      },
      createMovieClip: function createMovieClip(a, b, c) {
        var d = a.createEmptyMovieClip(b, c);
        this.make();

        for (var e = 0; e < this.modules.length; e++) {
          for (var f = 1 * e, g = 0; g < this.modules[e].length; g++) {
            var h = 1 * g,
                i = this.modules[e][g][0];
            i && (d.beginFill(0, 100), d.moveTo(h, f), d.lineTo(h + 1, f), d.lineTo(h + 1, f + 1), d.lineTo(h, f + 1), d.endFill());
          }
        }

        return d;
      },
      setupTimingPattern: function setupTimingPattern() {
        for (var a = 8; a < this.moduleCount - 8; a++) {
          null == this.modules[a][6][0] && (this.modules[a][6][0] = a % 2 == 0);
        }

        for (var b = 8; b < this.moduleCount - 8; b++) {
          null == this.modules[6][b][0] && (this.modules[6][b][0] = b % 2 == 0);
        }
      },
      setupPositionAdjustPattern: function setupPositionAdjustPattern(a) {
        for (var b = t.getPatternPosition(this.typeNumber), c = 0; c < b.length; c++) {
          for (var d = 0; d < b.length; d++) {
            var e = b[c],
                f = b[d];
            if (null == this.modules[e][f][0]) for (var g = -2; g <= 2; g++) {
              for (var h = -2; h <= 2; h++) {
                -2 == g || 2 == g || -2 == h || 2 == h || 0 == g && 0 == h ? (this.modules[e + g][f + h][0] = !0, this.modules[e + g][f + h][2] = a, this.modules[e + g][f + h][1] = -2 == g || -2 == h || 2 == g || 2 == h ? "O" : "I") : this.modules[e + g][f + h][0] = !1;
              }
            }
          }
        }
      },
      setupTypeNumber: function setupTypeNumber(a) {
        for (var b = t.getBCHTypeNumber(this.typeNumber), c = 0; c < 18; c++) {
          var d = !a && 1 == (b >> c & 1);
          this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3][0] = d;
        }

        for (var c = 0; c < 18; c++) {
          var d = !a && 1 == (b >> c & 1);
          this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)][0] = d;
        }
      },
      setupTypeInfo: function setupTypeInfo(a, b) {
        for (var c = this.errorCorrectLevel << 3 | b, d = t.getBCHTypeInfo(c), e = 0; e < 15; e++) {
          var f = !a && 1 == (d >> e & 1);
          e < 6 ? this.modules[e][8][0] = f : e < 8 ? this.modules[e + 1][8][0] = f : this.modules[this.moduleCount - 15 + e][8][0] = f;
        }

        for (var e = 0; e < 15; e++) {
          var f = !a && 1 == (d >> e & 1);
          e < 8 ? this.modules[8][this.moduleCount - e - 1][0] = f : e < 9 ? this.modules[8][15 - e - 1 + 1][0] = f : this.modules[8][15 - e - 1][0] = f;
        }

        this.modules[this.moduleCount - 8][8][0] = !a;
      },
      mapData: function mapData(a, b) {
        for (var c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount - 1; g > 0; g -= 2) {
          for (6 == g && g--;;) {
            for (var h = 0; h < 2; h++) {
              if (null == this.modules[d][g - h][0]) {
                var i = !1;
                f < a.length && (i = 1 == (a[f] >>> e & 1));
                var j = t.getMask(b, d, g - h);
                j && (i = !i), this.modules[d][g - h][0] = i, e--, -1 == e && (f++, e = 7);
              }
            }

            if ((d += c) < 0 || this.moduleCount <= d) {
              d -= c, c = -c;
              break;
            }
          }
        }
      }
    }, b.PAD0 = 236, b.PAD1 = 17, b.createData = function (a, c, f) {
      for (var g = d.getRSBlocks(a, c), h = new e(), i = 0; i < f.length; i++) {
        var j = f[i];
        h.put(j.mode, 4), h.put(j.getLength(), t.getLengthInBits(j.mode, a)), j.write(h);
      }

      for (var k = 0, i = 0; i < g.length; i++) {
        k += g[i].dataCount;
      }

      if (h.getLengthInBits() > 8 * k) throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * k + ")");

      for (h.getLengthInBits() + 4 <= 8 * k && h.put(0, 4); h.getLengthInBits() % 8 != 0;) {
        h.putBit(!1);
      }

      for (;;) {
        if (h.getLengthInBits() >= 8 * k) break;
        if (h.put(b.PAD0, 8), h.getLengthInBits() >= 8 * k) break;
        h.put(b.PAD1, 8);
      }

      return b.createBytes(h, g);
    }, b.createBytes = function (a, b) {
      for (var d = 0, e = 0, f = 0, g = new Array(b.length), h = new Array(b.length), i = 0; i < b.length; i++) {
        var j = b[i].dataCount,
            k = b[i].totalCount - j;
        e = Math.max(e, j), f = Math.max(f, k), g[i] = new Array(j);

        for (var l = 0; l < g[i].length; l++) {
          g[i][l] = 255 & a.buffer[l + d];
        }

        d += j;
        var m = t.getErrorCorrectPolynomial(k),
            n = new c(g[i], m.getLength() - 1),
            o = n.mod(m);
        h[i] = new Array(m.getLength() - 1);

        for (var l = 0; l < h[i].length; l++) {
          var p = l + o.getLength() - h[i].length;
          h[i][l] = p >= 0 ? o.get(p) : 0;
        }
      }

      for (var q = 0, l = 0; l < b.length; l++) {
        q += b[l].totalCount;
      }

      for (var r = new Array(q), s = 0, l = 0; l < e; l++) {
        for (var i = 0; i < b.length; i++) {
          l < g[i].length && (r[s++] = g[i][l]);
        }
      }

      for (var l = 0; l < f; l++) {
        for (var i = 0; i < b.length; i++) {
          l < h[i].length && (r[s++] = h[i][l]);
        }
      }

      return r;
    };

    for (var q = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8
    }, r = {
      L: 1,
      M: 0,
      Q: 3,
      H: 2
    }, s = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    }, t = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function getBCHTypeInfo(a) {
        for (var b = a << 10; t.getBCHDigit(b) - t.getBCHDigit(t.G15) >= 0;) {
          b ^= t.G15 << t.getBCHDigit(b) - t.getBCHDigit(t.G15);
        }

        return (a << 10 | b) ^ t.G15_MASK;
      },
      getBCHTypeNumber: function getBCHTypeNumber(a) {
        for (var b = a << 12; t.getBCHDigit(b) - t.getBCHDigit(t.G18) >= 0;) {
          b ^= t.G18 << t.getBCHDigit(b) - t.getBCHDigit(t.G18);
        }

        return a << 12 | b;
      },
      getBCHDigit: function getBCHDigit(a) {
        for (var b = 0; 0 != a;) {
          b++, a >>>= 1;
        }

        return b;
      },
      getPatternPosition: function getPatternPosition(a) {
        return t.PATTERN_POSITION_TABLE[a - 1];
      },
      getMask: function getMask(a, b, c) {
        switch (a) {
          case s.PATTERN000:
            return (b + c) % 2 == 0;

          case s.PATTERN001:
            return b % 2 == 0;

          case s.PATTERN010:
            return c % 3 == 0;

          case s.PATTERN011:
            return (b + c) % 3 == 0;

          case s.PATTERN100:
            return (Math.floor(b / 2) + Math.floor(c / 3)) % 2 == 0;

          case s.PATTERN101:
            return b * c % 2 + b * c % 3 == 0;

          case s.PATTERN110:
            return (b * c % 2 + b * c % 3) % 2 == 0;

          case s.PATTERN111:
            return (b * c % 3 + (b + c) % 2) % 2 == 0;

          default:
            throw new Error("bad maskPattern:" + a);
        }
      },
      getErrorCorrectPolynomial: function getErrorCorrectPolynomial(a) {
        for (var b = new c([1], 0), d = 0; d < a; d++) {
          b = b.multiply(new c([1, u.gexp(d)], 0));
        }

        return b;
      },
      getLengthInBits: function getLengthInBits(a, b) {
        if (1 <= b && b < 10) switch (a) {
          case q.MODE_NUMBER:
            return 10;

          case q.MODE_ALPHA_NUM:
            return 9;

          case q.MODE_8BIT_BYTE:
          case q.MODE_KANJI:
            return 8;

          default:
            throw new Error("mode:" + a);
        } else if (b < 27) switch (a) {
          case q.MODE_NUMBER:
            return 12;

          case q.MODE_ALPHA_NUM:
            return 11;

          case q.MODE_8BIT_BYTE:
            return 16;

          case q.MODE_KANJI:
            return 10;

          default:
            throw new Error("mode:" + a);
        } else {
          if (!(b < 41)) throw new Error("type:" + b);

          switch (a) {
            case q.MODE_NUMBER:
              return 14;

            case q.MODE_ALPHA_NUM:
              return 13;

            case q.MODE_8BIT_BYTE:
              return 16;

            case q.MODE_KANJI:
              return 12;

            default:
              throw new Error("mode:" + a);
          }
        }
      },
      getLostPoint: function getLostPoint(a) {
        for (var b = a.getModuleCount(), c = 0, d = 0; d < b; d++) {
          for (var e = 0; e < b; e++) {
            for (var f = 0, g = a.isDark(d, e), h = -1; h <= 1; h++) {
              if (!(d + h < 0 || b <= d + h)) for (var i = -1; i <= 1; i++) {
                e + i < 0 || b <= e + i || 0 == h && 0 == i || g == a.isDark(d + h, e + i) && f++;
              }
            }

            f > 5 && (c += 3 + f - 5);
          }
        }

        for (var d = 0; d < b - 1; d++) {
          for (var e = 0; e < b - 1; e++) {
            var j = 0;
            a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, 0 != j && 4 != j || (c += 3);
          }
        }

        for (var d = 0; d < b; d++) {
          for (var e = 0; e < b - 6; e++) {
            a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
          }
        }

        for (var e = 0; e < b; e++) {
          for (var d = 0; d < b - 6; d++) {
            a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
          }
        }

        for (var k = 0, e = 0; e < b; e++) {
          for (var d = 0; d < b; d++) {
            a.isDark(d, e) && k++;
          }
        }

        return c += Math.abs(100 * k / b / b - 50) / 5 * 10;
      }
    }, u = {
      glog: function glog(a) {
        if (a < 1) throw new Error("glog(" + a + ")");
        return u.LOG_TABLE[a];
      },
      gexp: function gexp(a) {
        for (; a < 0;) {
          a += 255;
        }

        for (; a >= 256;) {
          a -= 255;
        }

        return u.EXP_TABLE[a];
      },
      EXP_TABLE: new Array(256),
      LOG_TABLE: new Array(256)
    }, v = 0; v < 8; v++) {
      u.EXP_TABLE[v] = 1 << v;
    }

    for (var v = 8; v < 256; v++) {
      u.EXP_TABLE[v] = u.EXP_TABLE[v - 4] ^ u.EXP_TABLE[v - 5] ^ u.EXP_TABLE[v - 6] ^ u.EXP_TABLE[v - 8];
    }

    for (var v = 0; v < 255; v++) {
      u.LOG_TABLE[u.EXP_TABLE[v]] = v;
    }

    c.prototype = {
      get: function get(a) {
        return this.num[a];
      },
      getLength: function getLength() {
        return this.num.length;
      },
      multiply: function multiply(a) {
        for (var b = new Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++) {
          for (var e = 0; e < a.getLength(); e++) {
            b[d + e] ^= u.gexp(u.glog(this.get(d)) + u.glog(a.get(e)));
          }
        }

        return new c(b, 0);
      },
      mod: function mod(a) {
        if (this.getLength() - a.getLength() < 0) return this;

        for (var b = u.glog(this.get(0)) - u.glog(a.get(0)), d = new Array(this.getLength()), e = 0; e < this.getLength(); e++) {
          d[e] = this.get(e);
        }

        for (var e = 0; e < a.getLength(); e++) {
          d[e] ^= u.gexp(u.glog(a.get(e)) + b);
        }

        return new c(d, 0).mod(a);
      }
    }, d.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], d.getRSBlocks = function (a, b) {
      var c = d.getRsBlockTable(a, b);
      if (c == i) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);

      for (var e = c.length / 3, f = [], g = 0; g < e; g++) {
        for (var h = c[3 * g + 0], j = c[3 * g + 1], k = c[3 * g + 2], l = 0; l < h; l++) {
          f.push(new d(j, k));
        }
      }

      return f;
    }, d.getRsBlockTable = function (a, b) {
      switch (b) {
        case r.L:
          return d.RS_BLOCK_TABLE[4 * (a - 1) + 0];

        case r.M:
          return d.RS_BLOCK_TABLE[4 * (a - 1) + 1];

        case r.Q:
          return d.RS_BLOCK_TABLE[4 * (a - 1) + 2];

        case r.H:
          return d.RS_BLOCK_TABLE[4 * (a - 1) + 3];

        default:
          return i;
      }
    }, e.prototype = {
      get: function get(a) {
        var b = Math.floor(a / 8);
        return 1 == (this.buffer[b] >>> 7 - a % 8 & 1);
      },
      put: function put(a, b) {
        for (var c = 0; c < b; c++) {
          this.putBit(1 == (a >>> b - c - 1 & 1));
        }
      },
      getLengthInBits: function getLengthInBits() {
        return this.length;
      },
      putBit: function putBit(a) {
        var b = Math.floor(this.length / 8);
        this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++;
      }
    };
    var w = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
        x = function () {
      return "undefined" != typeof CanvasRenderingContext2D;
    }() ? function () {
      function a() {
        if ("svg" == this._htOption.drawer) {
          var a = this._oContext.getSerializedSvg(!0);

          this.dataURL = a, this._el.innerHTML = a;
        } else try {
          var b = this._elCanvas.toDataURL("image/png");

          this.dataURL = b;
        } catch (a) {
          console.error(a);
        }

        this._htOption.onRenderingEnd && (this.dataURL || console.error("Can not get base64 data, please check: 1. Published the page and image to the server 2. The image request support CORS 3. Configured `crossOrigin:'anonymous'` option"), this._htOption.onRenderingEnd(this._htOption, this.dataURL));
      }

      function b(a, b) {
        var c = this;

        if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
          var d = document.createElement("img"),
              e = function e() {
            c._bSupportDataURI = !1, c._fFail && c._fFail.call(c);
          },
              f = function f() {
            c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c);
          };

          return d.onabort = e, d.onerror = e, d.onload = f, void (d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
        }

        !0 === c._bSupportDataURI && c._fSuccess ? c._fSuccess.call(c) : !1 === c._bSupportDataURI && c._fFail && c._fFail.call(c);
      }

      if (m._android && m._android <= 2.1) {
        var c = 1 / window.devicePixelRatio,
            d = CanvasRenderingContext2D.prototype.drawImage;

        CanvasRenderingContext2D.prototype.drawImage = function (a, b, e, f, g, h, i, j, k) {
          if ("nodeName" in a && /img/i.test(a.nodeName)) for (var l = arguments.length - 1; l >= 1; l--) {
            arguments[l] = arguments[l] * c;
          } else void 0 === j && (arguments[1] *= c, arguments[2] *= c, arguments[3] *= c, arguments[4] *= c);
          d.apply(this, arguments);
        };
      }

      var e = function e(a, b) {
        this._bIsPainted = !1, this._android = f(), this._el = a, this._htOption = b, "svg" == this._htOption.drawer ? (this._oContext = {}, this._elCanvas = {}) : (this._elCanvas = document.createElement("canvas"), this._el.appendChild(this._elCanvas), this._oContext = this._elCanvas.getContext("2d")), this._bSupportDataURI = null, this.dataURL = null;
      };

      return e.prototype.draw = function (a) {
        function b() {
          d.quietZone > 0 && d.quietZoneColor && (h.lineWidth = 0, h.fillStyle = d.quietZoneColor, h.fillRect(0, 0, i._elCanvas.width, d.quietZone), h.fillRect(0, d.quietZone, d.quietZone, i._elCanvas.height - 2 * d.quietZone), h.fillRect(i._elCanvas.width - d.quietZone, d.quietZone, d.quietZone, i._elCanvas.height - 2 * d.quietZone), h.fillRect(0, i._elCanvas.height - d.quietZone, i._elCanvas.width, d.quietZone));
        }

        function c(a) {
          function c(a) {
            var c = Math.round(d.width / 3.5),
                e = Math.round(d.height / 3.5);
            c !== e && (c = e), d.logoMaxWidth ? c = Math.round(d.logoMaxWidth) : d.logoWidth && (c = Math.round(d.logoWidth)), d.logoMaxHeight ? e = Math.round(d.logoMaxHeight) : d.logoHeight && (e = Math.round(d.logoHeight));
            var f, g;
            void 0 === a.naturalWidth ? (f = a.width, g = a.height) : (f = a.naturalWidth, g = a.naturalHeight), (d.logoMaxWidth || d.logoMaxHeight) && (d.logoMaxWidth && f <= c && (c = f), d.logoMaxHeight && g <= e && (e = g), f <= c && g <= e && (c = f, e = g));
            var i = (d.width + 2 * d.quietZone - c) / 2,
                j = (d.height + d.titleHeight + 2 * d.quietZone - e) / 2,
                k = Math.min(c / f, e / g),
                l = f * k,
                m = g * k;
            (d.logoMaxWidth || d.logoMaxHeight) && (c = l, e = m, i = (d.width + 2 * d.quietZone - c) / 2, j = (d.height + d.titleHeight + 2 * d.quietZone - e) / 2), d.logoBackgroundTransparent || (h.fillStyle = d.logoBackgroundColor, h.fillRect(i, j, c, e));
            var n = h.imageSmoothingQuality,
                o = h.imageSmoothingEnabled;
            h.imageSmoothingEnabled = !0, h.imageSmoothingQuality = "high", h.drawImage(a, i + (c - l) / 2, j + (e - m) / 2, l, m), h.imageSmoothingEnabled = o, h.imageSmoothingQuality = n, b(), s._bIsPainted = !0, s.makeImage();
          }

          d.onRenderingStart && d.onRenderingStart(d);

          for (var i = 0; i < e; i++) {
            for (var j = 0; j < e; j++) {
              var k = j * f + d.quietZone,
                  l = i * g + d.quietZone,
                  m = a.isDark(i, j),
                  n = a.getEye(i, j),
                  o = d.dotScale;
              h.lineWidth = 0;
              var p, q;
              n ? (p = d[n.type] || d[n.type.substring(0, 2)] || d.colorDark, q = d.colorLight) : d.backgroundImage ? (q = "rgba(0,0,0,0)", 6 == i ? d.autoColor ? (p = d.timing_H || d.timing || d.autoColorDark, q = d.autoColorLight) : p = d.timing_H || d.timing || d.colorDark : 6 == j ? d.autoColor ? (p = d.timing_V || d.timing || d.autoColorDark, q = d.autoColorLight) : p = d.timing_V || d.timing || d.colorDark : d.autoColor ? (p = d.autoColorDark, q = d.autoColorLight) : p = d.colorDark) : (p = 6 == i ? d.timing_H || d.timing || d.colorDark : 6 == j ? d.timing_V || d.timing || d.colorDark : d.colorDark, q = d.colorLight), h.strokeStyle = m ? p : q, h.fillStyle = m ? p : q, n ? (o = "AO" == n.type ? d.dotScaleAO : "AI" == n.type ? d.dotScaleAI : 1, d.backgroundImage && d.autoColor ? (p = ("AO" == n.type ? d.AI : d.AO) || d.autoColorDark, q = d.autoColorLight) : p = ("AO" == n.type ? d.AI : d.AO) || p, m = n.isDark, h.fillRect(k + f * (1 - o) / 2, d.titleHeight + l + g * (1 - o) / 2, f * o, g * o)) : 6 == i ? (o = d.dotScaleTiming_H, h.fillRect(k + f * (1 - o) / 2, d.titleHeight + l + g * (1 - o) / 2, f * o, g * o)) : 6 == j ? (o = d.dotScaleTiming_V, h.fillRect(k + f * (1 - o) / 2, d.titleHeight + l + g * (1 - o) / 2, f * o, g * o)) : (d.backgroundImage, h.fillRect(k + f * (1 - o) / 2, d.titleHeight + l + g * (1 - o) / 2, f * o, g * o)), 1 == d.dotScale || n || (h.strokeStyle = d.colorLight);
            }
          }

          if (d.title && (h.fillStyle = d.titleBackgroundColor, h.fillRect(0, 0, this._elCanvas.width, d.titleHeight + d.quietZone), h.font = d.titleFont, h.fillStyle = d.titleColor, h.textAlign = "center", h.fillText(d.title, this._elCanvas.width / 2, +d.quietZone + d.titleTop)), d.subTitle && (h.font = d.subTitleFont, h.fillStyle = d.subTitleColor, h.fillText(d.subTitle, this._elCanvas.width / 2, +d.quietZone + d.subTitleTop)), d.logo) {
            var r = new Image(),
                s = this;
            r.onload = function () {
              c(r);
            }, r.onerror = function (a) {
              console.error(a);
            }, null != d.crossOrigin && (r.crossOrigin = d.crossOrigin), r.originalSrc = d.logo, r.src = d.logo;
          } else b(), this._bIsPainted = !0, this.makeImage();
        }

        var d = this._htOption;
        d.title || d.subTitle || (d.height -= d.titleHeight, d.titleHeight = 0);
        var e = a.getModuleCount(),
            f = Math.round(d.width / e),
            g = Math.round((d.height - d.titleHeight) / e);
        f <= 1 && (f = 1), g <= 1 && (g = 1), d.width = f * e, d.height = g * e + d.titleHeight, d.quietZone = Math.round(d.quietZone), this._elCanvas.width = d.width + 2 * d.quietZone, this._elCanvas.height = d.height + 2 * d.quietZone, "canvas" != this._htOption.drawer && (this._oContext = new C2S(this._elCanvas.width, this._elCanvas.height)), this.clear();
        var h = this._oContext;
        h.lineWidth = 0, h.fillStyle = d.colorLight, h.fillRect(0, 0, this._elCanvas.width, this._elCanvas.height);
        var i = this;

        if (d.backgroundImage) {
          var j = new Image();
          j.onload = function () {
            h.globalAlpha = 1, h.globalAlpha = d.backgroundImageAlpha;
            var b = h.imageSmoothingQuality,
                e = h.imageSmoothingEnabled;
            h.imageSmoothingEnabled = !0, h.imageSmoothingQuality = "high", h.drawImage(j, 0, d.titleHeight, d.width + 2 * d.quietZone, d.height + 2 * d.quietZone - d.titleHeight), h.imageSmoothingEnabled = e, h.imageSmoothingQuality = b, h.globalAlpha = 1, c.call(i, a);
          }, null != d.crossOrigin && (j.crossOrigin = d.crossOrigin), j.originalSrc = d.backgroundImage, j.src = d.backgroundImage;
        } else c.call(i, a);
      }, e.prototype.makeImage = function () {
        this._bIsPainted && b.call(this, a);
      }, e.prototype.isPainted = function () {
        return this._bIsPainted;
      }, e.prototype.clear = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1;
      }, e.prototype.remove = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1, this._el.innerHTML = "";
      }, e.prototype.round = function (a) {
        return a ? Math.floor(1e3 * a) / 1e3 : a;
      }, e;
    }() : function () {
      var a = function a(_a, b) {
        this._el = _a, this._htOption = b;
      };

      return a.prototype.draw = function (a) {
        var b = this._htOption,
            c = this._el,
            d = a.getModuleCount(),
            e = Math.round(b.width / d),
            f = Math.round((b.height - b.titleHeight) / d);
        e <= 1 && (e = 1), f <= 1 && (f = 1), this._htOption.width = e * d, this._htOption.height = f * d + b.titleHeight, this._htOption.quietZone = Math.round(this._htOption.quietZone);
        var g = [],
            h = "",
            i = Math.round(e * b.dotScale),
            j = Math.round(f * b.dotScale);
        i < 4 && (i = 4, j = 4);
        var k = b.colorDark,
            l = b.colorLight;

        if (b.backgroundImage) {
          b.autoColor ? (b.colorDark = "rgba(0, 0, 0, .6);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#99000000', EndColorStr='#99000000');", b.colorLight = "rgba(255, 255, 255, .7);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#B2FFFFFF', EndColorStr='#B2FFFFFF');") : b.colorLight = "rgba(0,0,0,0)";
          var m = '<div style="display:inline-block; z-index:-10;position:absolute;"><img src="' + b.backgroundImage + '" widht="' + (b.width + 2 * b.quietZone) + '" height="' + (b.height + 2 * b.quietZone) + '" style="opacity:' + b.backgroundImageAlpha + ";filter:alpha(opacity=" + 100 * b.backgroundImageAlpha + '); "/></div>';
          g.push(m);
        }

        if (b.quietZone && (h = "display:inline-block; width:" + (b.width + 2 * b.quietZone) + "px; height:" + (b.width + 2 * b.quietZone) + "px;background:" + b.quietZoneColor + "; text-align:center;"), g.push('<div style="font-size:0;' + h + '">'), g.push('<table  style="font-size:0;border:0;border-collapse:collapse; margin-top:' + b.quietZone + 'px;" border="0" cellspacing="0" cellspadding="0" align="center" valign="middle">'), g.push('<tr height="' + b.titleHeight + '" align="center"><td style="border:0;border-collapse:collapse;margin:0;padding:0" colspan="' + d + '">'), b.title) {
          var n = b.titleColor,
              o = b.titleFont;
          g.push('<div style="width:100%;margin-top:' + b.titleTop + "px;color:" + n + ";font:" + o + ";background:" + b.titleBackgroundColor + '">' + b.title + "</div>");
        }

        b.subTitle && g.push('<div style="width:100%;margin-top:' + (b.subTitleTop - b.titleTop) + "px;color:" + b.subTitleColor + "; font:" + b.subTitleFont + '">' + b.subTitle + "</div>"), g.push("</td></tr>");

        for (var p = 0; p < d; p++) {
          g.push('<tr style="border:0; padding:0; margin:0;" height="7">');

          for (var q = 0; q < d; q++) {
            var r = a.isDark(p, q),
                s = a.getEye(p, q);

            if (s) {
              r = s.isDark;
              var t = s.type,
                  u = b[t] || b[t.substring(0, 2)] || k;
              g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + 'px;"><span style="width:' + e + "px;height:" + f + "px;background-color:" + (r ? u : l) + ';display:inline-block"></span></td>');
            } else {
              var v = b.colorDark;
              6 == p ? (v = b.timing_H || b.timing || k, g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (r ? v : l) + ';"></td>')) : 6 == q ? (v = b.timing_V || b.timing || k, g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (r ? v : l) + ';"></td>')) : g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + 'px;"><div style="display:inline-block;width:' + i + "px;height:" + j + "px;background-color:" + (r ? v : b.colorLight) + ';"></div></td>');
            }
          }

          g.push("</tr>");
        }

        if (g.push("</table>"), g.push("</div>"), b.logo) {
          var w = new Image();
          null != b.crossOrigin && (w.crossOrigin = b.crossOrigin), w.src = b.logo;
          var x = b.width / 3.5,
              y = b.height / 3.5;
          x != y && (x = y), b.logoWidth && (x = b.logoWidth), b.logoHeight && (y = b.logoHeight);
          var z = "position:relative; z-index:1;display:table-cell;top:-" + ((b.height - b.titleHeight) / 2 + y / 2 + b.quietZone) + "px;text-align:center; width:" + x + "px; height:" + y + "px;line-height:" + x + "px; vertical-align: middle;";
          b.logoBackgroundTransparent || (z += "background:" + b.logoBackgroundColor), g.push('<div style="' + z + '"><img  src="' + b.logo + '"  style="max-width: ' + x + "px; max-height: " + y + 'px;" /> <div style=" display: none; width:1px;margin-left: -1px;"></div></div>');
        }

        b.onRenderingStart && b.onRenderingStart(b), c.innerHTML = g.join("");
        var A = c.childNodes[0],
            B = (b.width - A.offsetWidth) / 2,
            C = (b.height - A.offsetHeight) / 2;
        B > 0 && C > 0 && (A.style.margin = C + "px " + B + "px"), this._htOption.onRenderingEnd && this._htOption.onRenderingEnd(this._htOption, null);
      }, a.prototype.clear = function () {
        this._el.innerHTML = "";
      }, a;
    }();
    j = function j(a, b) {
      if (this._htOption = {
        width: 256,
        height: 256,
        typeNumber: 4,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: r.H,
        dotScale: 1,
        dotScaleTiming: 1,
        dotScaleTiming_H: i,
        dotScaleTiming_V: i,
        dotScaleA: 1,
        dotScaleAO: i,
        dotScaleAI: i,
        quietZone: 0,
        quietZoneColor: "rgba(0,0,0,0)",
        title: "",
        titleFont: "normal normal bold 16px Arial",
        titleColor: "#000000",
        titleBackgroundColor: "#ffffff",
        titleHeight: 0,
        titleTop: 30,
        subTitle: "",
        subTitleFont: "normal normal normal 14px Arial",
        subTitleColor: "#4F4F4F",
        subTitleTop: 60,
        logo: i,
        logoWidth: i,
        logoHeight: i,
        logoMaxWidth: i,
        logoMaxHeight: i,
        logoBackgroundColor: "#ffffff",
        logoBackgroundTransparent: !1,
        PO: i,
        PI: i,
        PO_TL: i,
        PI_TL: i,
        PO_TR: i,
        PI_TR: i,
        PO_BL: i,
        PI_BL: i,
        AO: i,
        AI: i,
        timing: i,
        timing_H: i,
        timing_V: i,
        backgroundImage: i,
        backgroundImageAlpha: 1,
        autoColor: !1,
        autoColorDark: "rgba(0, 0, 0, .6)",
        autoColorLight: "rgba(255, 255, 255, .7)",
        onRenderingStart: i,
        onRenderingEnd: i,
        version: 0,
        tooltip: !1,
        binary: !1,
        drawer: "canvas",
        crossOrigin: null,
        utf8WithoutBOM: !0
      }, "string" == typeof b && (b = {
        text: b
      }), b) for (var c in b) {
        this._htOption[c] = b[c];
      }
      (this._htOption.version < 0 || this._htOption.version > 40) && (console.warn("QR Code version '" + this._htOption.version + "' is invalidate, reset to 0"), this._htOption.version = 0), (this._htOption.dotScale < 0 || this._htOption.dotScale > 1) && (console.warn(this._htOption.dotScale + " , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScale = 1), (this._htOption.dotScaleTiming < 0 || this._htOption.dotScaleTiming > 1) && (console.warn(this._htOption.dotScaleTiming + " , is invalidate, dotScaleTiming must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming = 1), this._htOption.dotScaleTiming_H ? (this._htOption.dotScaleTiming_H < 0 || this._htOption.dotScaleTiming_H > 1) && (console.warn(this._htOption.dotScaleTiming_H + " , is invalidate, dotScaleTiming_H must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming_H = 1) : this._htOption.dotScaleTiming_H = this._htOption.dotScaleTiming, this._htOption.dotScaleTiming_V ? (this._htOption.dotScaleTiming_V < 0 || this._htOption.dotScaleTiming_V > 1) && (console.warn(this._htOption.dotScaleTiming_V + " , is invalidate, dotScaleTiming_V must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleTiming_V = 1) : this._htOption.dotScaleTiming_V = this._htOption.dotScaleTiming, (this._htOption.dotScaleA < 0 || this._htOption.dotScaleA > 1) && (console.warn(this._htOption.dotScaleA + " , is invalidate, dotScaleA must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleA = 1), this._htOption.dotScaleAO ? (this._htOption.dotScaleAO < 0 || this._htOption.dotScaleAO > 1) && (console.warn(this._htOption.dotScaleAO + " , is invalidate, dotScaleAO must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleAO = 1) : this._htOption.dotScaleAO = this._htOption.dotScaleA, this._htOption.dotScaleAI ? (this._htOption.dotScaleAI < 0 || this._htOption.dotScaleAI > 1) && (console.warn(this._htOption.dotScaleAI + " , is invalidate, dotScaleAI must greater than 0, less than or equal to 1, now reset to 1. "), this._htOption.dotScaleAI = 1) : this._htOption.dotScaleAI = this._htOption.dotScaleA, (this._htOption.backgroundImageAlpha < 0 || this._htOption.backgroundImageAlpha > 1) && (console.warn(this._htOption.backgroundImageAlpha + " , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "), this._htOption.backgroundImageAlpha = 1), this._htOption.height = this._htOption.height + this._htOption.titleHeight, "string" == typeof a && (a = document.getElementById(a)), (!this._htOption.drawer || "svg" != this._htOption.drawer && "canvas" != this._htOption.drawer) && (this._htOption.drawer = "canvas"), this._android = f(), this._el = a, this._oQRCode = null;
      var d = {};

      for (var c in this._htOption) {
        d[c] = this._htOption[c];
      }

      this._oDrawing = new x(this._el, d), this._htOption.text && this.makeCode(this._htOption.text);
    }, j.prototype.makeCode = function (a) {
      this._oQRCode = new b(g(a, this._htOption), this._htOption.correctLevel), this._oQRCode.addData(a, this._htOption.binary, this._htOption.utf8WithoutBOM), this._oQRCode.make(), this._htOption.tooltip && (this._el.title = a), this._oDrawing.draw(this._oQRCode);
    }, j.prototype.makeImage = function () {
      "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
    }, j.prototype.clear = function () {
      this._oDrawing.remove();
    }, j.prototype.resize = function (a, b) {
      this._oDrawing._htOption.width = a, this._oDrawing._htOption.height = b, this._oDrawing.draw(this._oQRCode);
    }, j.prototype.noConflict = function () {
      return m.QRCode === this && (m.QRCode = p), j;
    }, j.CorrectLevel = r, o ? ((o.exports = j).QRCode = j, n.QRCode = j) : m.QRCode = j;
  }.call(commonjsGlobal);
})(easy_qrcode_min, easy_qrcode_min.exports);

var qrcode = easy_qrcode_min.exports;

var defaultUseQRCodeOptions = {
    onRenderingEnd: function () { }
};
var useQRCode = function (text, options) {
    var state = vue.ref();
    var _a = _assign(_assign({}, defaultUseQRCodeOptions), options), onRenderingEnd = _a.onRenderingEnd, otherOptions = __rest(_a, ["onRenderingEnd"]);
    var Qrcode = new qrcode(document.createElement('div'), _assign(_assign({ text: vue.isRef(text) ? text.value : text }, otherOptions), { onRenderingEnd: function (qrCodeOptions, dataURL) {
            state.value = dataURL;
            onRenderingEnd(qrCodeOptions, dataURL);
        } }));
    if (vue.isRef(text)) {
        vue.watch(text, function () {
            Qrcode.makeCode(text.value);
        });
    }
    return state;
};

var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Connecting"] = 0] = "Connecting";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["Closing"] = 2] = "Closing";
    ReadyState[ReadyState["Closed"] = 3] = "Closed";
})(ReadyState || (ReadyState = {}));
var defaultOptions = {
    manual: false,
    reconnectLimit: 3,
    reconnectInterval: 3000,
    onOpen: function () { },
    onClose: function () { },
    onMessage: function () { },
    onError: function () { },
};
function useWebSocket(socketUrl, options) {
    var _a = _assign(_assign({}, defaultOptions), options), manual = _a.manual, reconnectLimit = _a.reconnectLimit, reconnectInterval = _a.reconnectInterval, onOpen = _a.onOpen, onClose = _a.onClose, onMessage = _a.onMessage, onError = _a.onError;
    if (!socketUrl || typeof (socketUrl) !== 'string') {
        throw new Error('useWebSocket require string socketUrl');
    }
    var readyState = vue.ref(ReadyState.Connecting);
    var reconnectCount = vue.ref(0);
    var socket = vue.ref();
    var latestMessage = vue.ref();
    var run = function () {
        socket.value = new WebSocket(socketUrl);
        socket.value.addEventListener('open', function (event) {
            readyState.value = ReadyState.Open;
            onOpen(event);
        });
        socket.value.addEventListener('message', function (event) {
            latestMessage.value = event;
            onMessage(event);
        });
        socket.value.addEventListener('error', function (event) {
            console.log('error ', event);
            reconnect();
            onError(event);
        });
        socket.value.addEventListener('close', function (event) {
            readyState.value = ReadyState.Closed;
            onClose(event);
        });
    };
    var connect = function () {
        if (readyState.value !== ReadyState.Open) {
            reconnectCount.value = 0;
            run();
        }
    };
    var reconnect = function () {
        if (reconnectCount.value >= reconnectLimit)
            return;
        useTimeout(function () {
            reconnectCount.value++;
            run();
        }, vue.ref(reconnectInterval));
    };
    var disconnect = function () {
        if ((readyState.value === ReadyState.Connecting
            || readyState.value === ReadyState.Open)
            && socket.value) {
            readyState.value = ReadyState.Closing;
            socket.value.close();
        }
    };
    var sendMessage = function (data) {
        if (data
            && socket.value
            && readyState.value === ReadyState.Open)
            socket.value.send(data);
    };
    if (!manual)
        connect();
    return {
        latestMessage: latestMessage,
        readyState: readyState,
        connect: connect,
        disconnect: disconnect,
        sendMessage: sendMessage,
        webSocketIns: socket
    };
}

var useUnmount = function (fn) {
    var unmounted = vue.onScopeDispose !== null && vue.onScopeDispose !== void 0 ? vue.onScopeDispose : vue.onUnmounted;
    unmounted(function () {
        fn();
    });
};

exports.useBoolean = useBoolean;
exports.useCookie = useCookie;
exports.useDate = useDate;
exports.useDebounce = useDebounce;
exports.useDebounceFn = useDebounceFn;
exports.useDocumentVisibility = useDocumentVisibility;
exports.useDynamicList = useDynamicList;
exports.useExternal = useExternal;
exports.useFullscreen = useFullscreen;
exports.useInterval = useInterval;
exports.useLocalStorage = useLocalStorage;
exports.useLockFn = useLockFn;
exports.useMap = useMap;
exports.useMediaQuery = useMediaQuery;
exports.useNetwork = useNetwork;
exports.useQRCode = useQRCode;
exports.useRequest = useRequest;
exports.useSessionStorage = useSessionStorage;
exports.useSet = useSet;
exports.useTextSelection = useTextSelection;
exports.useThrottle = useThrottle;
exports.useThrottleFn = useThrottleFn;
exports.useTimeout = useTimeout;
exports.useToggle = useToggle;
exports.useUnmount = useUnmount;
exports.useVirtualList = useVirtualList;
exports.useWebSocket = useWebSocket;
