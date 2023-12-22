import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import type { ConfigEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default (configEnv: ConfigEnv) => {
 // Load app-level env vars to node-level env vars.
 process.env = {
  ...process.env,
  ...loadEnv(configEnv.mode, process.cwd(), ""),
 };
 return defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
   alias: {
    src: "/src",
   },
  },
  test: {
   globals: true,
   environment: "jsdom",
   setupFiles: "./src/tests/setup",
  },
 });
};
