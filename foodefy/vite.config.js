import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
        secondary: "#3f37c9",
        success: "#4ade80",
        danger: "#f43f5e",
        warning: "#f59e0b",
        info: "#0ea5e9",
        dark: "#1e293b",
        light: "#f8fafc",
      },
    },
  },
};
