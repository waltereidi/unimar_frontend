import './assets/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { pinia } from './store';
import db from './localdb';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// Ícones que você quer usar
import { faUser, faHome, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

// Adiciona ao library
library.add(faUser, faHome, faArrowRightToBracket)

// Expor o DB globalmente, caso deseje acessar via this.$db
const app = createApp(App);
app.config.globalProperties.$db = db;

app.use(router);
app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');