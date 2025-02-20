import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para despliegue en GitHub Pages
export default defineConfig({
  base: '/tienda-de-carteras/', // Asegúrate de que este sea el nombre correcto del repositorio
  plugins: [react()],
  build: {
    outDir: 'dist', // Esto indica que la carpeta de salida será 'dist'
    rollupOptions: {
      output: {
        // Asegúrate de que los archivos generados tengan rutas relativas
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  }
})
