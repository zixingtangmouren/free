import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer')
      }
    },
    server: {
      host: '0.0.0.0'
    },
    plugins: [react(), svgr()],
    build: {
      rollupOptions: {
        input: {
          enter: resolve(__dirname, 'src/renderer/enter.html'),
          main: resolve(__dirname, 'src/renderer/main.html')
        }
      }
    }
  }
});
