import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base:"/Sarakri-Job-Academy/",
=======
  base: "/Sarakri-Job-Academy/"
>>>>>>> 7457a280e0a96dbf3acf06a3d2a371171588e524
  server: {
    host: '0.0.0.0',
  }
})
