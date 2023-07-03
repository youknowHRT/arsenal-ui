import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({

  plugins: [vue()],
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "index.ts",
      name: "ArsenalUI",
      fileName: "arsenal-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
  },
});