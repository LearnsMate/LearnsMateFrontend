import { createRouter, createWebHistory } from 'vue-router'
import MemberRouter from './member'
import LoginRouter from './login'
import MarketingRouter from './marketing'

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/lecture',
    name: 'Lecture',
    component: () => import('../views/LectureView.vue')
  },

  ...MemberRouter,
  ...LoginRouter,
  ...MarketingRouter,

  {
    path: '/voc',
    name: 'VOC',
    component: () => import('../views/voc/VocView.vue')
  },
  {
    path: '/',
    redirect: '/main'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router