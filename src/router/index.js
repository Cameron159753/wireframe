import { createRouter, createWebHashHistory } from 'vue-router'
import Inbox from '../views/Inbox.vue'

const routes = [
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/send',
    name: 'Send',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Send.vue')
  },
  {
    path: '/trash',
    name: 'Trash',
    component: () => import('../views/Trash.vue')
  },
  {
    path: '/spam',
    name: 'Spam',
    component: () => import('../views/Spam.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
