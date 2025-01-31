// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CourseListView.vue')
    },
    {
      path: '/courses/:id',
      name: 'course-details',
      component: () => import('../views/CourseDetails.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/Schedule.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/Auth.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('@/views/Auth.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/CourseDashboard.vue'),
      meta: { requiresAuth: true }
    }
  ]
})



export default router