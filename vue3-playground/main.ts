// vue3项目入口文件
import { createApp, version } from 'vue';
import component from '../src/index';
import App from '../demos/App.vue';

console.log('Vue version: ', version);
const app = createApp(App);
app.use(component);
app.mount('#app');
