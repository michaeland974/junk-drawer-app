import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()], 
  server: {
    port: 8000,
    host: true,
    proxy: {
      '/stream': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false
      }
    }
  },
  test: vitestConfig.test,
});
