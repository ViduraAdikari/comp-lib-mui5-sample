import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from '@rollup/plugin-node-resolve';
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
// import image from '@rollup/plugin-image';
// import scss from 'rollup-plugin-scss';
// import svg from 'rollup-plugin-svg';
import {terser} from "rollup-plugin-terser";

import pkg from "./package.json";

// @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-peer-deps-external @rollup/plugin-node-resolve -D
// rollup-plugin-dts rollup-plugin-terser -D
// rollup-plugin-postcss rollup-plugin-scss @rollup/plugin-image rollup-plugin-svg -D

export default [
  {
    input: "src/library.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      // {
      //   file: pkg.module,
      //   format: "esm",
      //   sourcemap: true,
      // },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({tsconfig: "./tsconfig-rollup.json"}),

      // scss(),
      // image(),
      // svg(),
      postcss(),
      terser()
    ],
  },
  {
    // input: "dist/esm/types/library.d.ts",
    input: "dist/types/library.d.ts",
    output: [{file: "dist/index.d.ts", format: "esm"}],
    plugins: [dts()],
    external: [/\.css$/],
  },
];