# tlbs-map-vue

基于 [腾讯位置服务 JavaScript API](https://lbs.qq.com/webApi/javascriptGL/glGuide/glOverview) 封装的 Vue 版地图组件库。

# 🎉 特性

- 封装腾讯地图API为响应式组件，无需关心复杂的地图API，只需要修改数据就能改变地图效果
- 同时兼容vue2和vue3框架
- 扩展性高，提供了地图和图层实例支持调用地图api

# 安装组件库
```bash
npm install tlbs-map-vue
```

# 基础使用
vue2框架下使用
```js
import Vue from 'vue';
import TlbsMap from 'tlbs-map-vue';

Vue.use(TlbsMap);
```

vue3框架下使用
```js
import { createApp } from 'vue';
import TlbsMap from 'tlbs-map-vue';

const app = createApp(App);
app.use(TlbsMap);
```

组件库使用文档参考：https://mapapi.qq.com/web/tlbs-map-vue/guide/get-started.html

# 参与贡献

欢迎任何愿意参与贡献的参与者。如果需要本地运行代码或参与贡献，请先阅读[参与贡献](./CONTRIBUTING.md)。

# 开源协议
tlbs-map-vue 遵循 [MIT 协议](./LICENSE)。