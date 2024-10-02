import { createRouter, createWebHistory } from 'vue-router';
import login from './view/login.vue';
import signup from './view/signup.vue';

const routes = [{ path: '/login', component: login},
                { path: '/signup', component: signup}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;