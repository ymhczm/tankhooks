/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:02:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-01 16:38:43
 */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

const input = 'packages/index.ts';
const isProd = process.env.NODE_ENV;
const fn = 'index';
const outputDir =  isProd? 'build' : 'example/build';


const basePlugins = [ // 打包插件
  nodeResolve(), // 查找和打包node_modules中的第三方模块
  commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
  typescript({ // 解析TypeScript
    tsconfigOverride: {
      compilerOptions: {
        declaration: false,
      },
    },
  }), 
]

const devPlugins = [];
const prodPlugins = [
  babel({
    babelHelpers: 'bundled',
  })
];

const plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins);


const configs = [
  {
    input,
    output: [
      {
        file: `${outputDir}/${fn}.es.js`, 
        format: 'esm',
        globals: {
          'vue': 'Vue'
        }
      },
      {
        file: `${outputDir}/${fn}.cjs.js`, 
        format: 'cjs',
        globals: {
          'vue': 'Vue'
        }
      },
      {
        name: 'tankhooks',
        file: `${outputDir}/${fn}.js`, 
        format: 'umd',
        globals: {
          'vue': 'Vue'
        },
        plugins: [terser()],
      },
    ],
    plugins: plugins,
    external: [
      'vue',
      'vue-router',
    ]
  },
  {
    input,
    output: {
      file: `${outputDir}/${fn}.d.ts`,
      format: 'esm',
    },
    plugins: [
      dts(),
    ],
    external: [
      'vue',
    ]
  }
]


export default configs
