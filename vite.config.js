import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //se agrego todo lo de abajo porque no perimtia usar la api por problemas
  //relacionados con los CORS(mediada de seguridad implementada por navegadores)
  server:{
    proxy:{
      '/api':{
        target:'https://dolarapi.com/v1/dolares',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/, ''),
      },
    },
  },
});
//por eso se agrego el proxy 