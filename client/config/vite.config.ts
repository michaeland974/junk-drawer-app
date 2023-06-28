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
          target: 'https://drawer-streaming.onrender.com',
          changeOrigin: true,
          secure: false
      }
    }
  },
  test: vitestConfig.test,
});
