import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'header' },
    component: () => import('../views/Home.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },

  {
    path: '/imac',
    name: 'iMac',
    meta: { layout: 'header' },
    component: () => import('../views/iMac.vue')
  },

  {
    path: '/iphone',
    name: 'iPhone',
    meta: { layout: 'header' },
    component: () => import('../views/iPhone.vue')
  },

  {
    path: '/iPad',
    name: 'iPad',
    meta: { layout: 'header' },
    component: () => import('../views/iPad.vue')
  },

  {
    path: '/macbook',
    name: 'Macbook',
    meta: { layout: 'header' },
    component: () => import('../views/Macbook.vue')
  },

  {
    path: '/watch',
    name: 'Watch',
    meta: { layout: 'header' },
    component: () => import('../views/Watch.vue')
  },

  {
    path: '/airpods',
    name: 'Airpods',
    meta: { layout: 'header' },
    component: () => import('../views/Airpods.vue')
  },

  {
    path: '/tv',
    name: 'TV',
    meta: { layout: 'header' },
    component: () => import('../views/TV.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
