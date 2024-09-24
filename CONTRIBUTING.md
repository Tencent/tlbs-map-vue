# 参与贡献

## 启动组件库项目

1. 基于 `dev` 分支创建开发分支，分支命名规则 ```feature/组件名称```,例如 feature/map
2. 在根目录执行 ```pnpm install```
3. 在根目录下执行 ```npm run dev:3```，执行完后访问 ```http://localhost:3000/```就可以看到开发组件的示例页面

## 组件库目录结构

- src 存放地图组件的目录，开发的组件需要放在这里
- demos 存放组件示例
- docs 存放组件文档的目录
- vue2-playground 存放vue2示例项目代码，能够以vue2.6环境启动组件库代码
- vue2.7-playground 存放vue2示例项目代码，能够以vue2.7环境启动组件库代码
- vue3-playground 存放vue3示例项目代码，能够以vue3环境启动组件库代码

## package.json中scripts命令

```
# 在vue2的环境启动示例
$ npm run dev:2

# 在vue3的环境启动示例
$ npm run dev:2.7

# 在vue3的环境启动示例
$ npm run dev:3

# 生成vue2版本的地图组件库代码产物
$ npm run build:2

# 生成vue2.7版本的地图组件库代码产物
$ npm run build:2.7

# 生成vue3版本的地图组件库代码产物
$ npm run build:3

# 生成vue2、vue2.7、vue3版本的地图组件库代码产物
$ npm run build

# 打tag、生成组件库产物并发布到tnpm
$ npm run release

# 启动文档服务
$ npm run docs:dev

# 发布文档上传到cos
$ npm run docs:release

# 检查代码
$ npm run lint

# 生成规范的git commit信息
$ npm run commit

# 生成新组件
$ npm run new

```

## 开发组件流程

1. 执行```npm run new```命令创建组件，命令会根据输入的组件名称创建组件文件、组件文档文件、组件示例文件
2. 书写组件接口文档
3. 开发组件功能
4. 提交合并请求review代码后会合并到dev分支

## 组件命名规范

组件文件夹及组件名采用中划线 '-' 来连接单词进行命名，例如 ```multi-marker```

## 文档编写规范

在根目录执行 ``` npm run docs:dev ```就可以在本地进行组件文档编写，文档目录使用了 ```vitepress```

书写文档方法：

- 在 docs 目录的components目录增加组件对应的markdown文件
- 在 .vitepress 目录的config文件中设置侧边栏配置
- 由于需要在文档中显示组件效果，所以需要编写组件使用示例，各个使用示例在 demos 目录去编写

文档书写规范：

- 根据组件的接口，分别书写示例，并展示示例代码
- 在markdown文档要说明组件props及事件

## Commit Message 规范
遵守 Angular 团队的 [Commit Message 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)，保持项目的一致性，也可以方便生成每个版本的 Changelog，很容易地被追溯。

它的 message 格式如下 :

```html
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
大致分为三个部分(使用空行分割):
- 标题行: 必填, 描述主要修改类型和内容
- 主题内容: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
- 页脚注释: 放 Breaking Changes 或 Closed Issues

分别由如下几部分构成:

- type: commit 的类型，取值有以下几种：
	- feat: 新特性
	- fix: 修改问题
	- refactor: 代码重构
	- docs: 文档修改
	- style: 代码格式修改, 注意不是 css 修改
	- test: 测试用例修改
	- chore: 其他修改, 比如构建流程, 依赖管理.
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述
- body: commit 具体修改内容, 可以分为多行
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.

项目中安装了commitlint工具，在项目根目录执行``` npm run commit ```就可以方便的提交符合规范的提交信息了。