# src/views/Forbidden.vue
<template>
  <div class="min-h-[calc(100vh-200px)] flex items-center justify-center bg-light-gray px-4">
    <div class="text-center">
      <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-error-red/10 text-error-red flex items-center justify-center">
        <i class="fas fa-lock text-4xl"></i>
      </div>
      <h1 class="text-6xl font-bold text-primary-navy mb-4">403</h1>
      <p class="text-xl text-text-gray mb-8">Access Denied</p>
      <p class="text-text-gray mb-8 max-w-md mx-auto">
        You don't have permission to access this page. Please contact your administrator if you think this is a mistake.
      </p>
      <router-link 
        :to="getHomeRoute" 
        class="inline-flex items-center px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-light-orange transition-colors"
      >
        <i class="fas fa-home mr-2"></i>
        Back to Dashboard
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const getHomeRoute = computed(() => {
  if (authStore.isTeacher) {
    return '/faculty/dashboard'
  } else if (authStore.isStudent) {
    return '/dashboard'
  }
  return '/'
})
</script>