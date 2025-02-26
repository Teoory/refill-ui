import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      name: "RefillUI",
      fileName: (format) => `refill-ui.${format === 'es' ? 'es' : 'umd'}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsx'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'refill-ui.css';
          return assetInfo.name;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // src klasörüne @ ile erişim sağlar
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData kısmını kaldırıyoruz çünkü artık _index.scss'i doğrudan import edeceğiz
      },
    },
  },
});
