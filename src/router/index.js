import { createRouter, createWebHistory } from 'vue-router';
import EditStock from '@/components/EditStock.vue';

const routes = [
    {
        path: '/',
        redirect: '/editstock'
    },
    {
        path: '/editstock',
        name: 'EditStock',
        component: EditStock
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
