//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '@/views/Index.vue')
    },
    {
        path: '/user',
        name: 'user.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/user/Index.vue')
    },
    {
        path: '/user/create',
        name: 'user.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/user/Create.vue')
    },
    {
        path: '/user/edit/:id',
        name: 'user.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/user/Update.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router