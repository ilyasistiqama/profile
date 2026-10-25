import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Tetap "build" supaya script deploy gh-pages tidak perlu diubah
    outDir: "build",
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
});
