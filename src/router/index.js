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
    },
    {
        path: '/pekerjaan',
        name: 'pekerjaan.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/pekerjaan/Index.vue')
    },
    {
        path: '/pekerjaan/create',
        name: 'pekerjaan.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/pekerjaan/Create.vue')
    },
    {
        path: '/pekerjaan/edit/:id',
        name: 'pekerjaan.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/pekerjaan/Update.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router