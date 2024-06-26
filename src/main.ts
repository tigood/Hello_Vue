// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入路由
import router from '@/router';
// 引入 pinia
import {createPinia} from "pinia";

// 创建app，将App组件插到花盆里
const app = createApp(App);
// 创建 pinia
const pinia = createPinia();
// 安装 pinia
app.use(pinia);
// 为该app配置路由
app.use(router);
// 将app挂载到模板上
app.mount('#app');

