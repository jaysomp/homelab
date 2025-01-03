import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3030, // Updated port
    strictPort: true, // Ensure Vite only uses this specific port
    host: true, // Listen on all network interfaces
  },
});