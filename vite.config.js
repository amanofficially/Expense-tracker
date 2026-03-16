import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Vite configuration — https://vitejs.dev/config/
// @vitejs/plugin-react enables:
//   - JSX transform (no need to import React in every file)
//   - Fast Refresh (instant UI updates without losing component state)
export default defineConfig({
  plugins: [react()],
})

