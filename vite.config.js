import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Sarakri-Job-Academy/",

  server: {
    host: '0.0.0.0',
  }
})
