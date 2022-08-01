import * as vue from 'vue';
import { Ref } from 'vue';

interface FetchParams extends RequestInit {
    url: RequestInfo;
}

// Service请求实例
type Service = (...args: any[]) => Promise<any>;

interface FetchService extends FetchParams{}


// 请求参数
interface BaseOptions {
    manual?: boolean; // 是否需要手动触发
    initialData?: any; //默认的 data
    formatResult?: (response: any) => any; // 格式化请求结果	
    onSuccess?: (data: any, params: any[]) => void; // 成功回调
    onError?: (error: Error, params: any[]) => void; // 失败回调
    defaultParams?: any[]; // 如果 manual=false ，自动执行 run 的时候，默认带上的参数
    pollingInterval?: number; // 轮询请求时间
    pollingWhenHidden?: boolean; // 在屏幕不可见时，暂时暂停定时任务。
    ready?: undefined | Ref<boolean>; // 依赖请求
    debounceInterval?: undefined | number; // 防抖
    throttleInterval?: undefined | number; // 节流
    refreshOnWindowFocus?: boolean, // 屏幕聚焦重新请求
    focusTimespan?: undefined | number, // 屏幕聚焦重新间隔
    loadingDelay?: number, //loading延迟时间
    refreshDeps?: any[], //依赖刷新监听
    cacheKey?: string, //缓存key
    cacheTime?: number, //缓存数据回收时间
    staleTime?: number //缓存数据新鲜时间
}

// 执行请求
type Run = (...args: any[])=> void;

// 重新执行
type Refresh = ()=> void;

//取消请求
type Cancel = (()=> void);

// 突变
type Mutate = (state:any)=> void;


// hook返回值
interface Result$1<T> {
    data: Ref<T | undefined>; // 是否需要手动触发
    loading: Ref<boolean>;
    run: Run;
    refresh: Refresh;
    cancel: Cancel;
    mutate: Mutate;
    error: Ref<Error | undefined>;
}

declare const useRequest: <T>(service: Service | FetchService, options?: BaseOptions | undefined) => Result$1<T>;

declare type Value = string | number | Date;
interface Options$5 {
    format?: string;
    method?: 'format' | 'millisecond' | 'second' | 'minute' | 'hour' | 'date' | 'day' | 'month' | 'year';
    methodParam?: number;
}
declare function useDate(value?: Value | undefined, options?: Options$5): {
    readonly data: any;
    refresh: (refreshValue?: Value) => void;
};

/**
 * 处理防抖值
 * @param value
 * @param delay
 * @returns
 */
declare const useDebounce: <T>(value: Ref<T>, delay?: number | undefined) => Ref<T>;

declare type Fn$2 = (...[]: any[]) => any;

/**
 * 处理防抖函数
 * @param fn
 * @param delay
 * @returns
 */
declare const useDebounceFn: (fn: Fn$2, delay?: number | undefined) => {
    run: () => void;
};

/**
 * 处理防抖值
 * @param value
 * @param delay
 * @returns
 */
declare const useThrottle: <T>(value: Ref<T>, delay?: number | undefined) => Ref<T>;

/**
 * 处理节流函数
 * @param fn
 * @param delay
 * @returns
 */
declare const useThrottleFn: (fn: Fn$2, delay?: number | undefined) => {
    run: () => void;
};

interface Actions$4 {
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
}
declare function useBoolean(value?: boolean): [Ref<boolean>, Actions$4];

declare type State = string | number | boolean | undefined;
declare type RefState = Ref<State>;
declare type Fn$1 = (v?: any) => void;
declare type Actions$3 = Fn$1[];
declare function useToggle<T extends State, U extends RefState>(...args: (T | U)[]): [U, Actions$3];

interface OptionType {
    itemHeight: number | ((index: number) => number);
    overscan?: number;
}
declare const useVirtualList: <T = any>(state: T[], options: OptionType) => {
    list: Ref<T[]>;
    wrapperStyle: {
        width: string;
        height: string;
        marginTop: string;
    };
    containerProps: {
        ref: (ele: any) => void;
        onScroll: (e: any) => void;
        style: {
            overflowY: "auto";
        };
    };
    scrollTo: (index: number) => void;
};

declare const useDynamicList: <T = any>(initialValue: Ref<T[]>) => {
    list: Ref<T[]>;
    resetList: (resetList: T[] | Ref<T[]>) => void;
    insert: (index: number, obj: T) => void;
    merge: (index: number, obj: T[]) => void;
    replace: (index: number, obj: T) => void;
    remove: (index: number) => void;
    move: (oldIndex: number, newIndex: number) => void;
    getKey: (index: number) => number;
    getIndex: (key: number) => number;
    push: (obj: T) => void;
    pop: () => void;
    unshift: (obj: T) => void;
    shift: () => void;
};

interface Options$4 {
    watch: boolean;
}
declare const useLocalStorage: <T = any>(key: string, initialValue?: T | Ref<T> | undefined, options?: Options$4 | undefined) => Ref<T | null | undefined>;

interface Options$3 {
    watch: boolean;
}
declare const useSessionStorage: <T = any>(key: string, initialValue?: T | Ref<T> | undefined, options?: Options$3 | undefined) => Ref<T | null | undefined>;

declare const useNetwork: () => {
    since?: number | {
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number | undefined) => number;
        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number | undefined) => number;
        setUTCMonth: (month: number, date?: number | undefined) => number;
        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        getVarDate: () => VarDate;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    } | undefined;
    online?: boolean | undefined;
    rtt?: number | undefined;
    type?: string | undefined;
    downlink?: number | undefined;
    saveData?: boolean | undefined;
    downlinkMax?: number | undefined;
    effectiveType?: string | undefined;
};

interface Options$2 {
    watch?: boolean;
    defaultValue?: string | undefined;
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
}
declare const useCookie: (key: string, options?: Options$2 | undefined) => vue.Ref<string | undefined>;

declare type ArgsAny = any[];
declare type Fn = (...args: ArgsAny) => Promise<any>;
declare const useLockFn: (fn: Fn) => (...args: ArgsAny) => Promise<any>;

interface Actions$2<T> {
    add: (value: T) => void;
    remove: (value: T) => void;
    has: (value: T) => boolean;
    clear: () => void;
    reset: () => void;
}
declare function useSet<T = any>(initialValue?: T[]): [
    state: Ref<Set<any>>,
    actions: Actions$2<T>
];

declare type MapValue = readonly (readonly [any, any])[];
interface Actions$1<T> {
    set: (key: string, value: T) => void;
    get: (key: string) => T;
    remove: (key: string) => void;
    has: (key: string) => boolean;
    clear: () => void;
    setAll: (newMap: MapValue) => void;
    reset: () => void;
}
declare function useMap<T = any>(initialValue?: MapValue): [
    state: Ref<Map<any, any>>,
    actions: Actions$1<T>
];

declare const useMediaQuery: (query: string) => vue.Ref<boolean>;

declare type Elements = HTMLScriptElement | HTMLLinkElement | HTMLImageElement;
interface Options$1 {
    manual?: boolean;
    async?: boolean;
    crossOrigin?: 'anonymous' | 'use-credentials';
    referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
    noModule?: boolean;
    defer?: boolean;
    media?: string;
    target?: HTMLElement | Ref<HTMLElement>;
}
declare const useExternal: (src: string, onLoaded?: ((el: Elements) => void) | undefined, options?: Options$1) => {
    resources: Ref<Elements | null>;
    load: () => Promise<unknown>;
    unload: () => void;
};

interface Options {
    onFull?: () => void;
    onExitFull?: () => void;
}
interface Actions {
    setFull: () => void;
    exitFull: () => void;
    toggle: () => void;
}
declare type Target$1 = HTMLElement | (() => HTMLElement) | Ref<HTMLElement>;
declare const useFullscreen: (target?: Target$1 | undefined, options?: Options | undefined) => [isFullscreen: Ref<boolean>, actions: Actions];

declare const useDocumentVisibility: () => Ref<boolean>;

declare type Target = HTMLElement | Ref<HTMLElement> | (() => HTMLElement) | Document;
declare const useTextSelection: (target?: Target) => vue.ToRefs<{
    text: string;
    rect: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        height: number;
        width: number;
    };
}>;

interface UseIntervalOptions {
    immediate?: boolean;
}
declare const useInterval: (fn: Fn$2, delay: number | Ref<number | undefined | null>, options?: UseIntervalOptions | undefined) => void;

declare const useTimeout: (fn: Fn$2, delay: number | Ref<number | undefined | null>) => void;

declare type Text = Ref<string> | string;
interface useQRCodeOptions {
    onRenderingStart?: (qrCodeOptions: any) => void;
    onRenderingEnd?: (qrCodeOptions: any, dataURL: string) => void;
    [key: string]: any;
}
declare const useQRCode: (text: Text, options?: useQRCodeOptions | undefined) => Ref<string | undefined>;

interface UseWebSocketOptions {
    manual?: boolean;
    reconnectLimit?: number;
    reconnectInterval?: number;
    onOpen?: (event: WebSocketEventMap['open']) => void;
    onClose?: (event: WebSocketEventMap['close']) => void;
    onMessage?: (event: WebSocketEventMap['message']) => void;
    onError?: (event: WebSocketEventMap['error']) => void;
}
declare enum ReadyState {
    Connecting = 0,
    Open = 1,
    Closing = 2,
    Closed = 3
}
interface Result {
    latestMessage: Ref<WebSocketEventMap['message'] | undefined>;
    sendMessage: WebSocket['send'];
    disconnect: () => void;
    connect: () => void;
    readyState: Ref<ReadyState>;
    webSocketIns: Ref<WebSocket | undefined>;
}
declare function useWebSocket(socketUrl: string, options?: UseWebSocketOptions): Result;

declare const useUnmount: (fn: any) => void;

export { useBoolean, useCookie, useDate, useDebounce, useDebounceFn, useDocumentVisibility, useDynamicList, useExternal, useFullscreen, useInterval, useLocalStorage, useLockFn, useMap, useMediaQuery, useNetwork, useQRCode, useRequest, useSessionStorage, useSet, useTextSelection, useThrottle, useThrottleFn, useTimeout, useToggle, useUnmount, useVirtualList, useWebSocket };
