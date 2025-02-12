// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
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
    },
    {
      path: '/profile/student',
      name: 'student-profile',
      component: () => import('../views/ProfileStudent.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/profile/teacher',
      name: 'teacher-profile',
      component: () => import('../views/ProfileTeacher.vue'),
      meta: { requiresAuth: true }
    },
     {
      path: '/faculty/dashboard',
      name: 'faculty-dashboard',
      component: () => import('../views/FacultyDashboard.vue'),
      meta: { requiresAuth: true, role: 'faculty' }
    },
    {
      path: '/courses/:id/edit',
      name: 'edit-course',
      component: () => import('../views/EditCourse.vue'),
      meta: { requiresAuth: true, role: 'faculty' }
    },
    {
      path: '/courses/:id/students',
      name: 'course-students',
      component: () => import('../views/CourseStudents.vue'),
      meta: { requiresAuth: true, role: 'faculty' }
    },
    {
      path: '/courses/:id/materials',
      name: 'course-materials',
      component: () => import('../views/CourseMaterials.vue'),
      meta: { requiresAuth: true, role: 'faculty' }
    },
    {
      path: '/courses/new',
      name: 'new-course',
      component: () => import('../views/EditCourse.vue'),
      meta: { requiresAuth: true, role: 'faculty' }
    },
    {
      path: '/dashboard',
      name: 'student-dashboard',
      component: () => import('../views/CourseDashboard.vue'),
      meta: { requiresAuth: true, role: 'student' }
    },
    {
      path: '/faculty/dashboard',
      name: 'faculty-dashboard',
      component: () => import('../views/FacultyDashboard.vue'),
      meta: { requiresAuth: true, role: 'teacher' }
    },
    {
      path: '/courses/:id/edit',
      name: 'edit-course',
      component: () => import('../views/EditCourse.vue'),
      meta: { requiresAuth: true, role: 'teacher' }
    },
    {
      path: '/courses/:id/students',
      name: 'course-students',
      component: () => import('../views/CourseStudents.vue'),
      meta: { requiresAuth: true, role: 'teacher' }
    },
    {
      path: '/courses/:id/materials',
      name: 'course-materials',
      component: () => import('../views/CourseMaterials.vue'),
      meta: { requiresAuth: true, role: 'teacher' }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/Schedule.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/403',
      name: 'forbidden',
      component: () => import('../views/Forbidden.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()
  
//   // Sprawdź czy strona wymaga autoryzacji
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next('/auth')
//     return
//   }

//   // Sprawdź uprawnienia roli
//   if (to.meta.role) {
//     const userRole = authStore.user?.role
//     if (userRole !== to.meta.role) {
//       next('/403')
//       return
//     }
//   }

//   // Przekieruj zalogowanych użytkowników do odpowiedniego dashboardu z /auth
//   if (to.path === '/auth' && authStore.isAuthenticated) {
//     if (authStore.isTeacher) {
//       next('/faculty/dashboard')
//     } else if (authStore.isStudent) {
//       next('/dashboard')
//     }
//     return
//   }

//   // Przekieruj do odpowiedniego dashboardu po zalogowaniu
//   if (to.path === '/' && authStore.isAuthenticated) {
//     if (authStore.isTeacher) {
//       next('/faculty/dashboard')
//     } else if (authStore.isStudent) {
//       next('/dashboard')
//     }
//     return
//   }

//   next()
// })


export default router