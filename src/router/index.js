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
    }
  ]
})

export default router