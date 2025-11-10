import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tratar archivos .html en carpetas dentro de `src` como assets para
  // evitar que Vite intente analizarlos como módulos JS durante
  // import-analysis.
  assetsInclude: ["**/*.html"],
})
