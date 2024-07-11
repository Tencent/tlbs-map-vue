/// <reference types="vitest" />
import * as path from 'node:path';
import { Plugin, defineConfig } from 'vite';
import { isVue2 } from 'vue-demi';
import dts from 'vite-plugin-dts';
import { prefix } from './src/config';

const outputName = 'index';

export const getSharedPlugins = (vueVersion: 'v2' | 'v2.7' | 'v3'): Plugin[] => [
  dts({
    root: '..',
    compilerOptions: {
      skipLibCheck: true,
    },
    // only compiler our component source code
    include: ['src/**'],
    // vue2.6 does not apply to this plugin, ignore the error, 2.6 or handwritten .d.ts is better
    skipDiagnostics: vueVersion === 'v2',
    noEmitOnError: vueVersion === 'v2',
  }),
];

console.log('Vue version:', isVue2 ? 'v2' : 'v3');

// https://vitejs.dev/config/
export const baseBuildConfig = defineConfig({
  build: {
    outDir: path.resolve(__dirname, `./dist/${isVue2 ? 'v2' : 'v3'}`),
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: `${prefix}Map`,
      fileName: format => `${outputName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@vue/composition-api/dist/vue-composition-api.mjs'],
      output: {
        globals: {
          vue: 'Vue',
          '@vue/composition-api/dist/vue-composition-api.mjs':
            'VueCompositionAPI',
        },
      },
    },
  },
  optimizeDeps: {
    // 不打包vue相关库
    exclude: ['vue-demi', 'vue', 'vue2', 'vue3'],
  },
});
