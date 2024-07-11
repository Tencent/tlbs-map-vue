# 快速上手

---

本节将介绍如何在项目中使用 tlbs-map。

## 申请腾讯位置服务开发Key

https://lbs.qq.com/dev/console/application/mine

## 引入gl地图引擎（如果给地图组件传apiKey参数则不需要此步骤）
index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <!-- 引入gl地图引擎，并传入key -->
    <script
      charset="utf-8"
      src="https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&libraries=visualization,geometry,vector"
    ></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.ts"></script>
  </body>
</html>
```

## 安装组件库

```bash
npm install --save tlbs-map-vue
```


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

<<< demos/multi-marker.vue
