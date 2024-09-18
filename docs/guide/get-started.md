# 快速上手

---

本节将介绍如何在项目中使用 tlbs-map。

## 申请腾讯位置服务开发Key

申请链接：https://lbs.qq.com/dev/console/application/mine

注意：示例文档中使用的key是测试用的key，请勿在线上业务中使用，请您替换为上面链接中申请的key。


## 安装组件库

```bash
npm install --save tlbs-map-vue
```
注意：Node需要在16及以上版本才能安装使用组件库

## 使用组件

main.js

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import TlbsMap from 'tlbs-map-vue';

createApp(App)
  .use(router)
  .use(TlbsMap)
  .mount('#app');
```

地图组件使用如下：
注意：需要将第一步申请的Key，传入到tlbs-map组件的api-key参数中

<<< ../../demos/multi-marker.vue
