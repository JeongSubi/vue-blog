import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 라우트만든거 from "./router.js";


createApp(App).use(라우트만든거).mount('#app');
