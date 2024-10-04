import { createRouter, createWebHistory } from 'vue-router';
// import login from './view/login.vue';
// import signup from './view/signup.vue';
import index from './view/index.vue';

const routes = [
                { path: '/index', component: index}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;