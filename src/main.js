import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { pinia } from './store';
import db from './localdb';
// Expor o DB globalmente, caso deseje acessar via this.$db
const app = createApp(App);

app.config.globalProperties.$db = db;

app.use(router);
app.use(pinia);

app.mount('#app');