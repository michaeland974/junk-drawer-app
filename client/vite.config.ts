import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    // vitest config, with helpful vitest typing :)
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), 'prettier'], 
  server: {
    port: 8000,
  },
  test: vitestConfig.test,

});
