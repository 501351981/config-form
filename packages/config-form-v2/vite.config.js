import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
const { resolve } = require('path');
import babel from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    createVuePlugin()
  ],
  build: {
    minify: 'terser',
    target: 'es2015',
    outDir: 'lib/dist',
    lib: {
      entry: resolve(__dirname, 'index.js'), //指定组件编译入口文件
      name: 'config-form',
      fileName: 'config-form',
    },
    optimizeDeps: {

    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
      },
      plugins: [
        babel({
          extensions: ['.js', '.ts', '.vue'],
          babelHelpers: 'runtime',
          plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-template-literals'
          ],
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: false,
                targets: {
                  chrome: '80'
                },
              },
            ],
          ],
        }),
      ],
    },
  },
});