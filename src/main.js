import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const app = createApp(App);
const vuetify = createVuetify();

app.use(vuetify);
app.use(router);
app.mount('#app');
