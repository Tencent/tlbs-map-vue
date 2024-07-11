// vue2.7项目入口文件
import Vue, { version } from 'vue';
import component from '../src/index';
import App from '../demos/App.vue';

console.log('Vue version: ', version);
Vue.config.productionTip = false;
Vue.use(component);

new Vue({ render: h => h(App as any) }).$mount('#app');
