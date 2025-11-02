import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages deployment
// Replace "glassmorphism-website" with your repo name if needed
export default defineConfig({
  plugins: [react()],
  base: "/glassmorphism-website/",
});


