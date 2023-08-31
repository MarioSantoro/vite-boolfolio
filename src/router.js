import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './pages/Homepage.vue';
import Aboutuspage from './pages/Aboutuspage.vue';
import Projectspage from './pages/Projectspage.vue'
import ShowProjectpage from './pages/ShowProjectpage.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: Aboutuspage
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projectspage
        },
        {
            path: '/show/:id',
            name: 'showProject',
            component: ShowProjectpage
        },
    ]
});
export { router };