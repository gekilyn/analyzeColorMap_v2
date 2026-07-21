import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
// import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.js"],
    exclude: ["e2e/**", "**/*.e2e.test.*", "node_modules/**", "dist/**"],
  },
  build: {
    outDir: "docs",
  },
});
