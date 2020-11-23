import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import UserCertificates from './pages/UserCertificates.vue';
import UserProfile from './pages/UserProfile.vue';
import UserSettings from './pages/UserSettings.vue';
import AppSupport from './pages/AppSupport.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/certificates', component: UserCertificates },
    { path: '/profile', component: UserProfile },
    { path: '/settings', component: UserSettings },
    { path: '/support', component: AppSupport }
  ]
});

export default router;
