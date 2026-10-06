import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

// Render Static Sites return 404 for direct requests such as /capabilities
// unless an SPA rewrite is configured in the Render dashboard. This plugin
// makes each React Router route directly addressable by publishing a copy of
// the built index.html at /<route>/index.html as well.
const spaRoutes = ["capabilities", "offerings", "solutions", "ventures", "about", "contact"];

function staticRouteFallbacks() {
  return {
    name: "static-route-fallbacks",
    apply: "build",
    async closeBundle() {
      const dist = resolve(process.cwd(), "dist");
      for (const route of spaRoutes) {
        const target = resolve(dist, route);
        await mkdir(target, { recursive: true });
        await cp(resolve(dist, "index.html"), resolve(target, "index.html"));
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), staticRouteFallbacks()]
});
