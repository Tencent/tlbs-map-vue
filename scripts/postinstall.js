/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('node:path');
const fse = require('fs-extra');
const packageJson = require('../package.json');
const packageJsonFilePath = path.join(__dirname, '../package.json');

// 根据项目vue切换版本
let vue = null;
try {
  vue = require('vue');
} catch (e) {
  console.log('请安装使用vue2/3');
  return;
}
const { version } = vue;

if (typeof version !== 'string' || !(version.startsWith('2.') || version.startsWith('3.'))) {
  console.log('请安装使用vue2/3');
  return;
}

const isVue2 = version.startsWith('2.');
const isVue27 = version.startsWith('2.7.');

// eslint-disable-next-line no-nested-ternary
const dir = `dist/${isVue2 ? (isVue27 ? 'v2.7' : 'v2') : 'v3'}`;

const exportObject = {
  main: `${dir}/index.umd.js`,
  module: `${dir}/index.es.js`,
  types: `${dir}/index.d.ts`,
  style: `${dir}/style.css`,
  exports: {
    '.': {
      types: `./${dir}/index.d.ts`,
      import: `./${dir}/index.es.js`,
      require: `./${dir}/index.cjs.js`,
    },
  },
};

fse.writeJsonSync(packageJsonFilePath, Object.assign(packageJson, exportObject), { spaces: '\t' });
