import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Determine the environment
const env = process.env.VITE_ENV || 'develop';

// Set output directory inside 'dist/'
const outDir = `dist/${env}`;

export default defineConfig({
  plugins: [vue()],
  base: env === 'release' ? '/PortFolio/' : '/develop/',
  build: {
    outDir,
    sourcemap: env !== 'release', // Enable sourcemaps for non-production
  },
  server: {
    port: env === 'release' ? 8081 : 3000, // Different ports for different environments
  },
});
