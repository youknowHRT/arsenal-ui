import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify:false,
    cssCodeSplit: true, // 开启css拆分
    lib: {
      entry: "./src/entry.ts",
      name: "ArsenalUI",
      fileName: "arsenal-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },
})