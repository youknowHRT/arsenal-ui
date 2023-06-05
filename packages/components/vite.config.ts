import { defineConfig } from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    vuePlugin(),
    vueJsxPlugin(),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: "index.ts",
      name: "ArsenalUI",
      fileName: "arsenal-ui",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});