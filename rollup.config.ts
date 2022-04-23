import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import styles from "rollup-plugin-styles";

const packageJson = require("./package.json");

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      name: "react-lib",
      assetFileNames: "[name]-[hash][extname]",
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      assetFileNames: "[name]-[hash][extname]",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./types",
    }),
    terser(),
    styles(),
  ],
  external: ["react", "react-dom", "is-react"],
};
