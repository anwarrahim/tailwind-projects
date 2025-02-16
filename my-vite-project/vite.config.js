import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Your custom configuration goes here
   plugins: [
    tailwindcss(),
  ],
  server: {
    open: true, // Opens the browser on server start
  },
  build: {
    outDir: 'dist', // Specifies the output directory
  },
});
