import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Correct config for Vercel
export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ important: use "/" for Vercel, NOT repo name
  build: {
    outDir: "dist",
  },
});
