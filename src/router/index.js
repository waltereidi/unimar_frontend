import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage/HomePage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
