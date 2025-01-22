import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import { createPinia } from 'pinia';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '@mdi/font/css/materialdesignicons.css';

loadFonts();

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);

// Montar la aplicación
app.mount('#app');
