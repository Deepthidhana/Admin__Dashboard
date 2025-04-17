/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    css: true,
    testTimeout:1000,
    reporters:["verbose"],
    // testMatch: ["./tests/**/*.test.tsx"],
    coverage:{
      thresholds:{
        statements:90,
        functions: 90,
        lines:90,
        branches:90
      }
    }
  },
});
