// vue2.7项目vite配置
import { resolve } from 'node:path';
import { UserConfig, defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import { baseBuildConfig, getSharedPlugins } from '../vite.base.config';

export const viteVue2Config = defineConfig({
  plugins: [vue2(), ...getSharedPlugins('v2.7')],
  server: {
    port: 2700, // 启动端口2700
  },
  resolve: {
    alias: {
      vue: resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v2.7/index.mjs'),
    },
  },
  // 基于通用配置
  ...baseBuildConfig,
  build: {
    ...(baseBuildConfig as UserConfig).build,
    outDir: resolve(__dirname, '../dist/v2.7'),
  },
});

export default viteVue2Config;
