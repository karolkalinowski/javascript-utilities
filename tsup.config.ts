import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm", "iife"],
  globalName: "JSUtils",
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  outDir: "dist",
});
