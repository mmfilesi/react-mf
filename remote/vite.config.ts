import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({

  server: {
    origin: 'http://localhost:3000',
    port: 3000,
    host: true,
  },

  base: 'http://localhost:3000/',

  build: {
    target: 'esnext',
    minify: true,
  },

  plugins: [
    react(),


    federation({
      name: 'mfFoo',
      manifest: true,
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },

      shared: {
        'react': { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
        // 'react-router': { singleton: true, eager: true, requiredVersion: false },
      },
    }),

  ],
})
