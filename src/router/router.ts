
import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import AddPost from '../views/AddPost.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/add', component: AddPost },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
