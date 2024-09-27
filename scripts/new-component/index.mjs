import inquirer from 'inquirer';
import { getComponentCode, getComponentDocCode, getDemoCode } from './templates/index.mjs';
import fs from 'fs';
import _ from 'lodash';
import path from 'path';

const CWD = process.cwd();

inquirer.prompt([{
  type: 'input',
  message: '请填写组件英文名称（需要使用大驼峰命名，例如MultiMarker）',
  name: 'name',
}, {
  type: 'input',
  message: '请填写组件中文名称（例如点标记）',
  name: 'zhName',
}]).then((answers) => {
  // console.log(getComponentCode(answers.name));
  // 生成组件文件
  const indexPath = path.resolve(CWD, 'src/index.ts');
  const componentFilePath = `${CWD}/src/${_.kebabCase(answers.name)}.ts`;
  generateFile(componentFilePath, getComponentCode(answers.name));
  insertComponentToIndex(answers.name, indexPath);
  // 生成示例文件
  const demoFilePath = `${CWD}/demos/${_.kebabCase(answers.name)}.vue`;
  generateFile(demoFilePath, getDemoCode(answers.name));
  insertComponentToDemos(answers.name, answers.zhName, `${CWD}/demos/App.vue`);
  // 生成文档文件
  const docsFilePath = `${CWD}/docs/components/${_.kebabCase(answers.name)}.md`;
  generateFile(docsFilePath, getComponentDocCode(answers.name, answers.zhName));
  insertComponentToDocsTheme(answers.name);
  insertComponentToDocsConfig(answers.name, answers.zhName);
  console.log('组件文件、示例文件、文档文件创建成功');
});


const generateFile = (filePath, content) => {
  // if (fs.existsSync(filePath)) {
  //   console.log(`${filePath}已存在，请重新创建`);
  //   return;
  // }
  try {
    fs.writeFileSync(filePath, content);
  } catch (err) {
    console.error('创建文件时出错:', err);
  }
};

function insertComponentToIndex(name, indexPath) {
  const importPattern = /import.*?;(?=\n\n)/;
  const importPath = getImportStr(name);
  let data = fs.readFileSync(indexPath).toString();
  if (data.match(new RegExp(importPath))) {
    console.log(`there is already ${name} in /src/index.ts`, 'notice');
    return;
  }
  // 插入import
  data = data.replace(importPattern, a => `${a}\n${importPath}`);

  // 写入components数组
  const componentsRegex = /const\s+components\s*=\s*\[\n([\s\S]*?)\n\];/;
  const arrayContent = data.match(componentsRegex)[1];
  const modifiedContent = `${arrayContent}\n  ${name},`;
  data = data.replace(componentsRegex, `const components = [\n${modifiedContent}\n];`);
  // 写入export
  const exportRegex = /export\s+\{\n([\s\S]*?)\n\};/;
  const objectContent = data.match(exportRegex)[1];
  const modifiedObjectContent = `${objectContent}\n  ${name},`;
  data = data.replace(exportRegex, `export {\n${modifiedObjectContent}\n};`);
  fs.writeFile(indexPath, data, (err) => {
    if (err) {
      console.log(err, 'error');
    }
  });
}

function insertComponentToDemos(name, zhName, demoPath) {
  // eslint-disable-next-line no-useless-escape
  const importPattern = /((?:import\s+.+\s+from\s+\'.+\'\s*;\r?\n)+)/;
  const importPath = getImportStr(`${name}`, 'vue');
  let data = fs.readFileSync(demoPath).toString();
  if (data.match(new RegExp(importPath))) {
    console.log(`there is already ${name} in /demos/App.vue`, 'notice');
    return;
  }
  // 插入import
  data = data.replace(importPattern, a => `${a}${importPath}\n`);

  // 写入components数组
  const componentsRegex = /const\s+components\s*=\s*\{\n([\s\S]*?)\n\};/;
  const arrayContent = data.match(componentsRegex)[1];
  const modifiedComponentsContent = `${arrayContent}\n  ${name},`;
  data = data.replace(componentsRegex, `const components = {\n${modifiedComponentsContent}\n};`);

  // 插入组件
  const newComponent = `  <h2>${zhName}</h2>
    <${name} />`;
  const regex = /<div>\n(.*?)(\n {2}<\/div>)/s;
  const match = data.match(regex);
  if (!match) {
    console.error('Template not found in the file.');
    return;
  }
  const divContent = match[1];
  const modifiedContent = `${divContent}\n  ${newComponent}`;

  // 替换原始内容
  data = data.replace(regex, `<div>\n${modifiedContent}\n  </div>`);

  fs.writeFile(demoPath, data, (err) => {
    if (err) {
      console.log(err, 'error');
    }
  });
}

function insertComponentToDocsTheme(name) {
  const indexPath = path.resolve(CWD, 'docs/.vitepress/theme/index.js');
  const importPattern = /import.*?;(?=\n\n)/;
  const importPath = `import ${name} from '../../../demos/${_.kebabCase(name)}.vue';`;
  let data = fs.readFileSync(indexPath).toString();
  if (data.match(new RegExp(importPath))) {
    console.log(`there is already ${name} in /src/index.ts`, 'notice');
    return;
  }
  // 插入import
  data = data.replace(importPattern, a => `${a}\n${importPath}`);

  // 写入components数组
  const componentsRegex = /const\s+components\s*=\s*\[\n([\s\S]*?)\n\];/;
  const arrayContent = data.match(componentsRegex)[1];
  const modifiedContent = `${arrayContent}\n  ${name},`;
  data = data.replace(componentsRegex, `const components = [\n${modifiedContent}\n];`);
  fs.writeFile(indexPath, data, (err) => {
    if (err) {
      console.log(err, 'error');
    }
  });
}

function insertComponentToDocsConfig(name, zhName) {
  const configPath = path.resolve(CWD, 'docs/.vitepress/config.js');
  // 写入componentItmes数组
  const componentsRegex = /const\s+componentItmes\s*=\s*\[\n([\s\S]*?)];/;
  let data = fs.readFileSync(configPath).toString();
  const arrayContent = data.match(componentsRegex)[1];
  const itemStr = `{ text: '${zhName}', link: '/components/${_.kebabCase(name)}' },`;
  const modifiedContent = `${arrayContent}  ${itemStr}`;
  data = data.replace(componentsRegex, `const componentItmes = [\n${modifiedContent}\n  ];`);
  fs.writeFile(configPath, data, (err) => {
    if (err) {
      console.log(err, 'error');
    }
  });
}

function getImportStr(name, suffix = '') {
  return `import ${getFirstLetterUpper(name)} from './${_.kebabCase(name)}${suffix ?  `.${suffix}` : ''}';`;
}

function getFirstLetterUpper(a) {
  return a[0].toUpperCase() + a.slice(1);
}
