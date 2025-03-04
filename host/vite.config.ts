import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: 'http://localhost:2000',
    port: 2000,
  },

  base: "http://localhost:2000/",

  plugins: [
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      manifest: true,

      exposes: {
        './store': './src/store/use-store',
      },

      remotes: {
        mfFoo: {
          type: "module",
          name: "mfFoo",
          entry: 'http://localhost:3000/remoteEntry.js',
        },
       // var_remote: "var_remote@https://[...]/remoteEntry.js",
      },

      shared: {
        'react': { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
        'zustand': { singleton: true, eager: true }
        //'react-router': { singleton: true, eager: true, requiredVersion: false },
      },
    }),

    react()],
})
