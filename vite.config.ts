import { defineConfig } from "vite"
import { resolve, join } from "path"
import react from "@vitejs/plugin-react"

// Define chrome as default browser for the dev server.
const opsys = process.platform
// windows
if (opsys === "win32") process.env.BROWSER = "chrome"
// macOS
if (opsys === "darwin") process.env.BROWSER = "/Applications/Google Chrome.app"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: resolve(import.meta.dirname, "dist"),
    sourcemap: true,
    minify: true,
    cssMinify: true,
  },
  resolve: {
    alias: {
      components: resolve(join(import.meta.dirname, "src/components")),
      contexts: resolve(join(import.meta.dirname, "src/contexts")),
      hooks: resolve(join(import.meta.dirname, "src/hooks")),
    },
  },
  plugins: [react()],
})
