import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  // base: "/SwiftCart/", // Adjust this to match your GitHub Pages repository name
  build: {
    outDir: "build",
  },
});
