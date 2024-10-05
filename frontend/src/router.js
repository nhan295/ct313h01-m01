import { createRouter, createWebHistory } from 'vue-router';
// import login from './view/login.vue';
// import signup from './view/signup.vue';
import index from './view/index.vue';
import HomePage_Header from './components/HomePage_Header.vue';
import UserPage_Header from './components/UserPage_Header.vue';
import HomePage from './view/HomePage.vue';
import ListBook from './components/ListBook.vue';

const routes = [
                { path: '/index', component: index},
                { path: '/HomePage', component: HomePage},
                { path: '/UserPage_Header', component: UserPage_Header}
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;