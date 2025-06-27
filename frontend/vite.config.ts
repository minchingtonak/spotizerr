import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },

  // Build configuration
  build: {
    outDir: '../static/react',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries chunk
          vendor: ['react', 'react-dom'],
          // React Router chunk
          'react-router': ['react-router-dom'],
          // React Query chunk
          'react-query': ['@tanstack/react-query'],
        },
      },
    },
  },

  // Development server configuration
  server: {
    proxy: {
      // Proxy API calls to Flask backend
      '/api': {
        target: 'http://localhost:7171',
        changeOrigin: true,
        secure: false,
      },
      // Proxy static images to Flask backend
      '/static/images': {
        target: 'http://localhost:7171',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
