require('./bootstrap');

import { createApp } from 'vue';
import Welcome from './components/Welcome.vue';

import * as VueRouter from 'vue-router';

import AboutComponent from './components/AboutComponent.vue';
import PrivacyComponent from './components/PrivacyComponent.vue';

const routes = [
    { path: '/about', component: AboutComponent},
    { path: '/privacy', component: PrivacyComponent},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory('/kernvancambuur/public/'),
    routes,
})


const app = createApp({})
app.use(router);
app.component('welcome', Welcome);
app.mount('#app');