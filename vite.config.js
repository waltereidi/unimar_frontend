import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from "@tailwindcss/vite";

export default ({ mode }) => {
  // Carrega variáveis do arquivo .env correspondente ao ambiente
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [
      vue(),
      tailwindcss()
    ],

    define: {
      __APP_ENV__: JSON.stringify(env.VITE_ENV)
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      port: 5173,
      open: true,
    },

    build: {
      outDir: mode === 'production' ? 'dist-prod' : 'dist-dev'
    }
  });
};
