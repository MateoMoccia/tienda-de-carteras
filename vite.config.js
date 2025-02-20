import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tienda-de-carteras/', // Asegúrate de que este es el nombre correcto del repo en GitHub
})
