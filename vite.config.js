import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Correct config for both Vercel and GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/Daily-Schedule/", // change this if your repo name changes
  build: {
    outDir: "dist",
  },
});
