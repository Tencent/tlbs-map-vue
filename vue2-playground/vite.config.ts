// vue2项目vite配置
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import { baseBuildConfig, getSharedPlugins } from '../vite.base.config';

export const viteVue2Config = defineConfig({
  plugins: [vue2(), ...getSharedPlugins('v2')],
  server: {
    port: 2000,
  },
  resolve: {
    alias: {
      vue: resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v2/index.mjs'),
    },
  },
  // 基于通用配置
  ...baseBuildConfig,
});

export default viteVue2Config;
