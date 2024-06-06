import {createApp} from 'vue';
import './assets/style/style.scss';
import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import Personal from './pages/Personal.vue';

// createApp(App).mount('#app');
const app = createApp(App);

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/main', name: 'Personal', component: Personal},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);
app.mount('#app');
