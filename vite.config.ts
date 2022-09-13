import { defineConfig } from "vite";


import preact from "@preact/preset-vite";
import sassDts from "vite-plugin-sass-dts";
import path from "path";
export default defineConfig({
  resolve: {
    "alias": {
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    }
  },
  "optimizeDeps": {
    "esbuildOptions": {
      "target": "es2020"
    }
  },
  plugins: [
    preact(),
    // sassDts({
    //   enabledMode: ["development"],
    // }),
  ],
  build: {
    target: "ESNext",
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
