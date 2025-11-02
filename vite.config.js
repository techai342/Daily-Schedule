import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Correct config for Vercel
export default defineConfig({
  plugins: [react()],
  base: "/", // Keep "/" for Vercel
  build: {
    outDir: "dist"
  }
});
