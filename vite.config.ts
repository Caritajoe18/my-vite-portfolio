import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Set your GitHub repo name here
const GITHUB_REPO = "my-vite-portfolio";

export default defineConfig(({ mode }) => {
  // Determine the base URL depending on environment
  let base;
  if (mode === "development") {
    base = "/"; // Local dev
  } else if (mode === "github") {
    base = `/${GITHUB_REPO}/`; // GitHub Pages
  } else {
    base = "/"; // DigitalOcean or root domain
  }

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
